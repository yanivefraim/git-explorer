import {Pipe} from 'angular2/core';


@Pipe({
  name: 'OrderBy'
})
export default class OrderBy {

  transform(array, args?) {
    let sortBy = args[0];
    return array.sort((a,b) => {
      if(a[sortBy] > b[sortBy]) {
        return 1;
      }
      if(a[sortBy] < b[sortBy]) {
        return -1;
      }

      return 0;
    });
  }

}
