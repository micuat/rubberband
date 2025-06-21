import p5 from "p5";

import P5Element from './p5.js';

export default class extends P5Element {
  constructor(id, state, emit) {
    super(id, state, emit)
  }

  sketch() {
    const pointsData = [
      {x: 0, y: -0.2, parent: -1}, // head
      {x: -0.3, y: -0.1, parent: -1}, // left shoulder (from screen view)
      {x: -0.2, y: -0.4, parent: 1},
      {x: 0.2, y: -0.1, parent: -1}, // right shoulder
      {x: 0.4, y: -0.4, parent: 3},
      {x: 0.3, y: 0.1, parent: -1}, // right thigh
      {x: 0.4, y: 0.2, parent: 5},
      {x: -0.1, y: 0.2, parent: -1}, // left thigh
      {x: 0, y: 0.4, parent: 7},
    ]
    const initialPoints = [];
    const points = [];
    const stems = [3, 5, 7, 1, 0]
    const parent = pointsData.map(e => e.parent);
    
    let captured = -1;

    let hIndex = 0;

    const s = ( p ) => {
      p.setup = () => {
        const canvas = p.createCanvas(400, 400);
        p.pixelDensity(1);

        initialPoints.push(...pointsData.map(pt => p.createVector(pt.x, pt.y)))
        points.push(...pointsData.map(pt => p.createVector(pt.x, pt.y)))      
      };

      p.draw = () => {
        p.background(100);
	
        const T = p.millis() * 0.001;
        p.curveTightness(0);
        const R = Math.min(p.width, p.height);
        p.translate(p.width / 2, p.height / 2);
        
        for (let i = 0; i < points.length; i++) {
          const nv = p5.Vector.fromAngle(((p.noise(T, i * 0.1)-0.5) * Math.PI * 2));
          nv.setMag((p.noise(i * 0.1, T) - 0.5) * 0.001)
          initialPoints[i].add(nv);
          
          const m = 0.45;
          if (initialPoints[i].x > m) initialPoints[i].x = m;
          if (initialPoints[i].x < -m) initialPoints[i].x = -m;
          if (initialPoints[i].y > m) initialPoints[i].y = m;
          if (initialPoints[i].y < -m) initialPoints[i].y = -m;
          
          const v = p5.Vector.sub(points[i], initialPoints[i]);
          v.limit(0.001);
          points[i].sub(v);
        }
        
        const centroid = stems.reduce((acc, cur) => p5.Vector.add(acc, points[cur]), p.createVector(0, 0))
        centroid.div(stems.length);
        
        p.push(); {
          const gradient = p.drawingContext
            .createRadialGradient(centroid.x * R, centroid.y * R, R * 0.1,
                                  points[0].x * R, points[0].y * R, R);
      
          // Add three color stops
          gradient.addColorStop(0, `hsl(${(T*10)%360}deg 100% 50%)`);
          // gradient.addColorStop(0.5, "blue");
          gradient.addColorStop(1, `hsl(${(T*10+90)%360}deg 100% 50%)`);
      
          // Set the fill style and draw a rectangle
          p.drawingContext.fillStyle = gradient;
      
          p.beginShape();
          let first;
          let second;
          let third;
          for (const idx of stems) {
            const pt = points[idx];
            const childIdx = parent.findIndex(e => e == idx);
            const childP = points[childIdx];
            const v = p5.Vector.sub(pt, centroid);
            // translate(centroid.x * R, centroid.y * R);
            // line(0, 0, v.x * R, v.y * R);
            const vv = v.copy();
            vv.normalize();
            let vc;
            if (childP !== undefined) {
              vc = p5.Vector.sub(childP, v);
              vc.normalize();
              const a0 = vv.heading();
              const a1 = vc.heading();
              vv.rotate((a1 - a0) / 2)
              vc.rotate(-Math.PI/2);
            }
            vv.rotate(-Math.PI/2);
            p.curveVertex((pt.x + vv.x * 0.1) * R,
                        (pt.y + vv.y * 0.1) * R);
            if (first === undefined) {
              first = p.createVector((pt.x + vv.x * 0.1) * R,
                                     (pt.y + vv.y * 0.1) * R);
            }
            vv.rotate(Math.PI/2);
            if (childP !== undefined) {
              p.curveVertex((childP.x + vc.x * 0.1) * R,
                            (childP.y + vc.y * 0.1) * R);			
              if (second === undefined) {
                second = p.createVector((childP.x + vc.x * 0.1) * R,
                                        (childP.y + vc.y * 0.1) * R);
              }
              vc.rotate(Math.PI/2)
              p.curveVertex((childP.x + vc.x * 0.1) * R,
                            (childP.y + vc.y * 0.1) * R);			
              if (third === undefined) {
                third = p.createVector((childP.x + vc.x * 0.1) * R,
                                       (childP.y + vc.y * 0.1) * R);
              }
              vc.rotate(Math.PI/2)
              p.curveVertex((childP.x + vc.x * 0.1) * R,
                            (childP.y + vc.y * 0.1) * R);			
            }
            else {
              p.curveVertex((pt.x + vv.x * 0.1) * R,
                            (pt.y + vv.y * 0.1) * R);
            }
            vv.rotate(Math.PI/2);
            p.curveVertex((pt.x + vv.x * 0.1) * R,
                          (pt.y + vv.y * 0.1) * R);
            // last = p.createVector((pt.x + vv.x * 0.1) * R,
            //                       (pt.y + vv.y * 0.1) * R);
      
          }
          p.curveVertex(first.x, first.y);
          p.curveVertex(second.x, second.y);
          p.curveVertex(third.x, third.y);
          p.endShape();
        } p.pop();
      
        for (const pt of points) {
          p.noStroke();
          const x = pt.x * R;
          const y = pt.y * R;
          p.circle(x, y, R*0.03);
        }
        p.push(); {
          p.noStroke();
          const x = centroid.x * R;
          const y = centroid.y * R;
          p.translate(x, y);
          const r = R * 0.07 * p.map(Math.sin(T * Math.PI * 2 * 0.1), -1, 1, 0.5, 1);
          p.fill(0, 200)
          p.circle(R*0.001, R*0.001, r*1.002);
          p.fill("red")
          p.circle(0, 0, r);
        } p.pop();

        let ii = Math.floor(p.map(points[2].x, -0.5, 0.5, 0, 9, true));
        if (hIndex !== ii) {
          hIndex = ii;
          this.emit("set asset", hIndex);
        }
      };
      
      p.windowResized = () => {
        // p.resizeCanvas(p.parentElement.clientWidth, p.parentElement.clientHeight);
      }

      function pressed() {
        const R = Math.min(p.width, p.height);
        const m = p.createVector((p.mouseX - p.width/2) / R, (p.mouseY - p.height/2) / R);
        for (let i = 0; i < points.length; i++) {
          if (points[i].dist(m) * R < 30) {
            captured = i;
            points[i].set(m.x, m.y);
            break;
          }
        }
      }
      
      p.mousePressed = () => {
        pressed();
      }
      
      p.touchStarted = () => {
        pressed();
      }
      
      function moved() {
        const R = Math.min(p.width, p.height);
        const m = p.createVector((p.mouseX - p.width/2) / R, (p.mouseY - p.height/2) / R);
        if (captured >= 0) {
          points[captured].set(m.x, m.y);
        }
      }
      
      p.mouseDragged = () => {
        moved();
      }
      
      p.touchMoved = () => {
        moved();
      }
      
      function released() {
        captured = -1;
      }
      
      p.mouseReleased = () => {
        released();
      }
    };

    return new p5(s);
  }
}
