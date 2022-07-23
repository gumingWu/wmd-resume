import MarkdownIt from '@wmd/md-parser'

const md = `
# 我是标题

我是内容

## 我是二级标题

我是二级内容

**加粗**
`

const test = MarkdownIt(md)
console.log(test);
