function find(dataSource, patternChar, patternQuery){
  for(let i in patternQuery){
    if(patternQuery[i] != patternChar){
      dataSource = dataSource.filter(item => { return item.charAt(i) == patternQuery[i] });
    }
  }
  return dataSource;
}
