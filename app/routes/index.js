import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return fetch('/data.json')
      .then(res=>res.json())
      .then(data=> {data.items = data.items.sort((a,b)=>(a.title>b.title)?1:((a.title<b.title)?-1:0));
        return data;
      });
  }
});
