const schema = [{hidden: true}, {hidden: false}];
const visible = schema.filter(s => !s.hidden).length;
console.log(visible);
