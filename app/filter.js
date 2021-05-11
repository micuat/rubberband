    if (filter != undefined) {
      if (filter.tag != undefined) {
        if (filter.tag != "all" && type.indexOf(filter.tag) < 0) continue;
      }
      if (filter.year != undefined) {
        if (filter.year != "all time" && dateYear != filter.year) continue;
      }
    }
