(this["webpackJsonpb-tree"]=this["webpackJsonpb-tree"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),s=n(6),a=n.n(s),h=n.p+"static/media/eild_header_logo.8bf73972.png",c=n(0),l=function(){return Object(c.jsx)("header",{className:"bg-white p-4 md:py-6 md:px-10",children:Object(c.jsxs)("div",{className:"w-full grid grid-cols-2",children:[Object(c.jsx)("h1",{className:"flex items-center no-underline text-black whitespace-nowrap text-2xl sm:text-6xl font-bold font-mono mr-8",children:"B-Baum-Zeichner"}),Object(c.jsx)("div",{className:"flex-auto",children:Object(c.jsx)("a",{href:"https://eild.nrw/",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("img",{className:"max-h-24 max-w-full float-right",src:h,alt:"EILD Logo"})})})]})})},o=n(3),d=n(2),u=n(4),v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(d.a)(this,e),this.parent=void 0,this.keys=void 0,this.children=void 0,this.parent=t,this.keys=n,this.children=i}return Object(u.a)(e,[{key:"isLeaf",value:function(){return 0===this.children.length}},{key:"isFull",value:function(e){return this.keys.length>=2*e}},{key:"insertKey",value:function(e){var t=this.keys.findIndex((function(t){return e<t}));-1===t&&(t=this.keys.length),this.keys.splice(t,0,e)}},{key:"addChild",value:function(e){e.parent=this;var t=e.keys[0],n=this.keys.findIndex((function(e){return t<e}));-1===n&&(n=this.keys.length),this.children.splice(n,0,e)}},{key:"getLeftNeighborNode",value:function(){if(!this.parent)return null;var e=this.parent.children.indexOf(this);return 0===e?null:this.parent.children[e-1]}},{key:"getRightNeighborNode",value:function(){if(!this.parent)return null;var e=this.parent.children.indexOf(this);return e+1===this.parent.children.length?null:this.parent.children[e+1]}}]),e}(),f=function(){function e(t){Object(d.a)(this,e),this.root=void 0,this.order=void 0,this.root=new v,this.order=t}return Object(u.a)(e,[{key:"getHeight",value:function(){for(var e=this.root,t=1;e.children[0];)t+=1,e=e.children[0];return t}},{key:"contains",value:function(e){return!!this.findNode(e)}},{key:"findNode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root;if(0===t.keys.length)return null;if(t.keys.some((function(t){return t===e})))return t;if(t.isLeaf())return null;var n=t.keys.findIndex((function(t){return e<t}));return-1===n&&(n=t.keys.length),this.findNode(e,t.children[n])}},{key:"insert",value:function(e){var t=this.getAppropriateLeafNode(e);t.isFull(this.order)?(t.insertKey(e),this.splitNode(t)):t.insertKey(e)}},{key:"getAppropriateLeafNode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root;if(t.isLeaf())return t;var n=t.keys.findIndex((function(t){return e<t}));return-1===n&&(n=t.keys.length),this.getAppropriateLeafNode(e,t.children[n])}},{key:"splitNode",value:function(e){var t=e.parent?e.parent:new v,n=new v,i=e.keys[this.order];n.keys=e.keys.slice(this.order+1),n.children=e.children.slice(this.order+1),n.children.forEach((function(e){e.parent=n})),e.keys=e.keys.slice(0,this.order),e.children=e.children.slice(0,this.order+1);var r=t.isFull(this.order);t.insertKey(i),e.parent||t.addChild(e),t.addChild(n),t.parent||(this.root=t),r&&this.splitNode(t)}},{key:"remove",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root,n=this.findNode(e,t);n&&(n.isLeaf()?n.keys.length>this.order?n.keys=n.keys.filter((function(t){return t!==e})):(n.keys=n.keys.filter((function(t){return t!==e})),this.handleUnderflow(n)):this.removeKeyFromInternalNode(e,n))}},{key:"removeKeyFromInternalNode",value:function(e,t){var n=t.keys.findIndex((function(t){return t===e}));t.keys.splice(n,1);for(var i=t.children[n];!i.isLeaf();)i=i.children[i.children.length-1];var r=i.keys[i.keys.length-1];t.insertKey(r),this.remove(r,i)}},{key:"handleUnderflow",value:function(e){var t=e.getLeftNeighborNode(),n=e.getRightNeighborNode();if(e.parent){var i=e.parent.children.findIndex((function(t){return e===t}));t&&t.keys.length>this.order?(e.insertKey(e.parent.keys[i-1]),e.parent.keys[i-1]=t.keys[t.keys.length-1],t.keys.splice(t.keys.length-1,1)):n&&n.keys.length>this.order?(e.insertKey(e.parent.keys[i]),e.parent.keys[i]=n.keys[0],n.keys.splice(0,1)):t?(e.insertKey(e.parent.keys[i-1]),e.parent.keys.splice(i-1,1),e.keys.forEach((function(e){return t.insertKey(e)})),e.children.forEach((function(e){return t.addChild(e)})),e.parent.children.splice(i,1),0===e.parent.keys.length&&null==e.parent.parent&&(t.parent=null,this.root=t)):n&&(e.insertKey(e.parent.keys[i]),e.parent.keys.splice(i,1),e.keys.forEach((function(e){return n.insertKey(e)})),e.children.forEach((function(e){return n.addChild(e)})),e.parent.children.splice(i,1),0!==e.parent.keys.length||e.parent.parent||(n.parent=null,this.root=n)),e.parent&&e.parent.keys.length<this.order&&e.parent.parent&&this.handleUnderflow(e.parent)}}}]),e}(),g=function e(t,n){Object(d.a)(this,e),this.x=void 0,this.y=void 0,this.width=void 0,this.height=void 0,this.x=t,this.y=n,this.width=55,this.height=24},b="16px Verdana",x=55,p=function(){function e(t,n,i){Object(d.a)(this,e),this.canvas=void 0,this.context=void 0,this.btree=void 0,this.treeType=void 0,this.idealCanvasHeight=500,this.canvas=t,this.canvas.width=this.canvas.width=this.canvas.parentElement?this.canvas.parentElement.scrollWidth-32:375,this.canvas.height=this.idealCanvasHeight;var r=this.canvas.getContext("2d");if(!r)throw Error("Could not get canvas context!");this.context=r,this.context.textAlign="center",this.btree=new f(n),this.treeType=i}return Object(u.a)(e,[{key:"resetTree",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.btree.order;this.btree=new f(e),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"insert",value:function(e){var t=this.validateInsertion(e);if(t.isValid){var n;n="number"===this.treeType?Number(e):e,this.checkCanvasSize();var i=105;this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawInfoText("Baum vor Einf\xfcgen von ".concat(n),i),this.drawTree(i),i+=x*(this.btree.getHeight()+1),i+=x,this.btree.insert(n),this.drawInfoText("Baum nach Einf\xfcgen von ".concat(n),i),this.drawTree(i),i+=x*(this.btree.getHeight()+1),this.canvas.height<i+55&&(this.idealCanvasHeight=i+55)}else{if(!t.error)throw Error("No validation error message found!");this.drawUpdateText(t.error)}}},{key:"remove",value:function(e){var t=this.validateRemoval(e);if(t.isValid){var n;n="number"===this.treeType?Number(e):e,this.checkCanvasSize();var i=105;this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawInfoText("Baum vor Entfernen von ".concat(n),i),this.drawTree(i),i+=x*(this.btree.getHeight()+1),i+=x,this.btree.remove(n),this.drawInfoText("Baum nach Entfernen von ".concat(n),i),this.drawTree(i),i+=x*(this.btree.getHeight()+1),this.canvas.height>i+55&&(this.idealCanvasHeight=i+55)}else{if(!t.error)throw Error("No validation error message found!");this.drawUpdateText(t.error)}}},{key:"checkCanvasSize",value:function(){this.canvas.height!==this.idealCanvasHeight&&(this.canvas.height=this.idealCanvasHeight,this.context.textAlign="center")}},{key:"validateInsertion",value:function(e){return"number"===this.treeType&&(e=Number(e)),this.btree.contains(e)?{isValid:!1,error:"Der Wert ist bereits vorhanden!"}:"number"===this.treeType&&isNaN(Number(e))?{isValid:!1,error:"Dieser Baumtyp nimmt nur Zahlen an!"}:{isValid:!0}}},{key:"validateRemoval",value:function(e){return"number"===this.treeType&&(e=Number(e)),this.btree.contains(e)?{isValid:!0}:{isValid:!1,error:"Der Wert ist nicht vorhanden!"}}},{key:"drawInfoText",value:function(e,t){this.context.font="24px Helvetica",this.context.fillText(e,this.canvas.width/2,t)}},{key:"drawTree",value:function(e){this.context.font=b;var t=this.extractNodeMatrixFromTree();e+=t.length*x;for(var n=t.length-1;n>=0;n--){for(var i=10*t[n].length,r=0,s=0;s<t[n].length;s++)for(var a=0;a<t[n][s].keys.length;a++)r+=x;for(var h=r+i,c=(this.canvas.width-h)/2,l=new g(c,e),o=0;o<t[n].length;o++){if(!t[n][o].isLeaf()){var d=t[n][o].children[t[n][o].children.length-1].x+55*t[n][o].children[t[n][o].children.length-1].keys.length-t[n][o].children[0].x;l.x=t[n][o].children[0].x+d/2,l.x-=55*t[n][o].keys.length/2}for(var u=0;u<t[n][o].keys.length;u++){this.context.fillStyle="rgba(0, 0, 255, 0.2)",this.context.fillRect(l.x,l.y,l.width,l.height),this.context.fillStyle="rgba(0, 0, 0, 1)",this.context.strokeRect(l.x,l.y,l.width,l.height),0===u&&(t[n][o].x=l.x,t[n][o].y=l.y);var v=String(t[n][o].keys[u]);this.drawCanvasNode(v,l),l.x+=l.width}l.x+=10}e-=x}this.context.fillStyle="rgba(0, 0, 0, 1)";for(var f=0;f<t.length;f++)for(var p=0;p<t[f].length;p++)if(null!=t[f][p].children)for(var y=0;y<t[f][p].children.length;y++){var m=t[f][p].y;m+=24;var j=t[f][p].children[y].y,k=t[f][p].x+55*y,A=t[f][p].children[y].x+55*t[f][p].children[y].keys.length/2;this.context.beginPath(),this.context.moveTo(k,m),this.context.lineTo(A,j),this.context.stroke()}}},{key:"drawUpdateText",value:function(e){this.context.font=b,this.context.clearRect(0,0,this.canvas.width,60),this.context.fillText(e,this.canvas.width/2,50)}},{key:"extractNodeMatrixFromTree",value:function(){for(var e=this.btree.root,t=[],n=0;n<this.btree.getHeight();n++)t.push([]);return this.extractNodesFromLevel(e,t,0),t}},{key:"extractNodesFromLevel",value:function(e,t,n){if(t[n].push(e),!e.isLeaf()){n+=1;for(var i=0;i<e.children.length;i++)this.extractNodesFromLevel(e.children[i],t,n)}}},{key:"drawCanvasNode",value:function(e,t){this.context.fillStyle="rgba(0, 0, 0, 1)";var n=t.x+t.width/2,i=this.context.measureText("M").width,r=t.y+t.height/2+i/2;this.context.fillText(e,n,r)}}]),e}(),y=function(e){var t=e.insertionHandler,n=e.deletionHandler,r=e.resetHandler,s=(e.degree,e.setDegree),a=(e.treeType,e.setTreeType),h=Object(i.useState)(""),l=Object(o.a)(h,2),d=l[0],u=l[1],v=Object(i.useState)(""),f=Object(o.a)(v,2),g=f[0],b=f[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"flex flex-col items-end space-y-2",children:[Object(c.jsxs)("div",{className:"flex flex-row",children:[Object(c.jsx)("input",{className:"p-1 mr-2 w-20 border rounded-lg border-gray-500",type:"text",maxLength:5,value:d,onChange:function(e){u(e.currentTarget.value)},onKeyDown:function(e){"Enter"===e.key&&(t(d),u(""))}}),Object(c.jsx)("button",{className:"mr-4 bg-th-violet hover:opacity-90 hover:shadow-md font-semibold text-white px-2 py-1 rounded-md cursor-pointer",type:"button",value:"insert",onClick:function(e){t(d),u("")},children:"Einf\xfcgen"}),Object(c.jsx)("input",{className:"p-1 mr-2 w-20 border rounded-lg border-gray-500",type:"text",maxLength:5,value:g,onChange:function(e){b(e.currentTarget.value)},onKeyDown:function(e){"Enter"===e.key&&(n(g),b(""))}}),Object(c.jsx)("button",{className:"bg-th-violet hover:opacity-90 hover:shadow-md font-semibold text-white px-2 py-1 rounded-md cursor-pointer",type:"button",value:"delete",onClick:function(e){n(g),b("")},children:"L\xf6schen"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{className:"mr-2 font-semibold",htmlFor:"treeType",children:"Typ des Baums:"}),Object(c.jsxs)("select",{className:"border rounded border-black",id:"treeType",onChange:function(e){a(e.currentTarget.value)},children:[Object(c.jsx)("option",{value:"number",children:"Zahlen"}),Object(c.jsx)("option",{value:"string",children:"Strings"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{className:"mr-2 font-semibold",htmlFor:"treeType",children:"Grad des Baums:"}),Object(c.jsxs)("select",{className:"border rounded border-black",id:"treeType",onChange:function(e){s(Number(e.currentTarget.value))},children:[Object(c.jsx)("option",{value:1,children:"1"}),Object(c.jsx)("option",{value:2,children:"2"}),Object(c.jsx)("option",{value:3,children:"3"}),Object(c.jsx)("option",{value:4,children:"4"}),Object(c.jsx)("option",{value:5,children:"5"})]})]}),Object(c.jsx)("button",{className:"bg-th-violet hover:opacity-90 hover:shadow-md font-semibold text-white px-2 py-1 rounded-md cursor-pointer",type:"button",value:"reset",onClick:function(e){r()},children:"Zur\xfccksetzen"})]})})},m=function(){var e=Object(i.useState)(1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)("number"),a=Object(o.a)(s,2),h=a[0],l=a[1],d=Object(i.useState)(),u=Object(o.a)(d,2),v=u[0],f=u[1],g=Object(i.useRef)(null);function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;v&&v.resetTree(e)}return Object(i.useEffect)((function(){var e=g.current;if(!e)throw Error("Could not find canvas reference!");f(new p(e,n,h))}),[]),Object(i.useEffect)((function(){b(n)}),[n]),Object(i.useEffect)((function(){var e=g.current;if(!e)throw Error("Could not find canvas reference!");f(new p(e,n,h))}),[h]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"bg-white p-4",children:[Object(c.jsx)(y,{insertionHandler:function(e){v&&v.insert(e)},deletionHandler:function(e){v&&v.remove(e)},resetHandler:b,treeType:h,setTreeType:l,degree:n,setDegree:r}),Object(c.jsx)("canvas",{className:"m-auto",ref:g})]})})},j=function(){return Object(c.jsxs)("footer",{className:"bg-gray-700 p-5 flex justify-between",children:[Object(c.jsx)("h3",{className:"text-white text-2xl font-sans",children:"EDB - eLearning Datenbank"}),Object(c.jsxs)("div",{className:"font-bold flex gap-4 text-white",children:[Object(c.jsxs)("a",{className:"flex items-center no-underline text-white",href:"https://wikis.gm.fh-koeln.de/",children:[Object(c.jsx)("img",{className:"inline w-6 h-6",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmBQkVBCNlx0coAAAEJklEQVRo3u2Ya4iUVRjHz6xuM17abc2k3Vo1lkqJUJE2WvqgfdBMJYTcApW2i5EFmZeiBM0u4EpRCYpUKqKlgRGCFiYalhkVWlEmZC0lbq7XRW13Zy+z++vDzJyeM+85Z9add6kP7/NpeJ/f+c9zbs85z1Eqssgiiyyy/9hiSpFQg7xMMtZOqSryMpdUXCWsnrZYR/anQ4Xl+O1FpWjIw5SzyuFZKP7pdNCtlCLOWB7hC0vjI9QxgbhSXMtdrKQpQHSxiemMJsYgJrOGTuFLsZF7EaNLBXM4aLRvkiOxgG7DeZCBOWNVyp6cAJ7IISbrEC5QbZsRinhPt95NqelcZIg/a2me4FuDKQ0QuwFopca1XBiRaXuIwUHnR0K83tq8kouCGRPwp6fyYfd6pQqAs1xnc1bQpsX3OwTkOM3L8ZWTAg74NgzPA1Dncr8pFtGNViLBKc3sse6oezx/X8RvQEPu+voXuF6MwTIHs0QT3VSK7wM5CXzt7f80AB73Ieu0/AniVmIIZ20rhQcBmOoN4FPgBFf5kEo6bGnEYJZpoo0bMt8GcAw4TMyjXQPAgjz5mQ1a/hxXW4kSmjWzLvOtDoAZXuXPgVMk8gVQRZeWX+5gXtZEJ1VKUUwD8IO3/1MAeKYXZxTva/nLjLASw7isma1K8TQAs7yq3wCnLenHgo4Vafl1B1Mv9kI1jcBRPGcmswBY0stzmh1aPim3miCG06KZXwCo9e7/H4HzDO1tAOPo0fLvOJi3jXPhmLf/cwF44QruKuwSOXGMlSgnKQKY49Eq5nfggn1PuRpVC/HtDma9YKZ5tJ707Sh3s71avIcJVmKkSFrOFESCk8Alyq40gBrRv08czIeCecB7drzShzurcVGbZCU+EMSvtjOOoZwBWhjelwCmCPmvLP7RYgoAHrUwKwBY1cd7O4eE/H0B79bMCslaIzlXfMpoBlrt+bQ3AcwUAfxk7nRuIwU0sdN9k2Q1AG8UULtwWMg/ZHg+Tv8l48UYnKPEyBStQJKKQgKYLQI4TrH+PpGe7OGSuQunbYVouxaANQVVbxTxs60S4DMAnlNKKe4UxN/Z+WYU7UAHIwssIDN5PG1/pY9T7gbgfDa5sk8wmRlnMwDrC65gGcBxIb9UKaU4YF5bmSSIJJVKcQtdQCc3hVBE85iQb6aM6QBc5BrBfCmYd/WBviGUKp5i/hDyr/I9AC8ZzFSjMK2lG0hxc0gPCTxlyGM7XPguwGwJ7SWDOI05lfFrAeb+HCLFrSE+prDYEG8JFpfEOGIw20J9zWEwZ4T4aitTK4gebg/5QUnUQ0nKHUnrqGZ2hP6iJeqht5zMPN3/if3wqMZKANqz9aAnae3sl1e9TD201svMB+COfnpYpJ5ORuVJWn+6bpDh5MSSvMyQvPVvZJFFFllk/x/7B3+MSqkvF9ifAAAAAElFTkSuQmCC",alt:"Wiki Logo"}),Object(c.jsx)("span",{className:"ml-1",children:"Datenbank-Wiki"})]}),Object(c.jsxs)("a",{className:"flex items-center no-underline text-white",href:"https://github.com/EILD-nrw/b-tree",children:[Object(c.jsx)("img",{className:"inline w-5 h-5",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII=",alt:"GitHub Logo"}),Object(c.jsx)("span",{className:"ml-1",children:"GitHub"})]})]})]})},k=n.p+"static/media/sponsor_logo.8d8b6f96.jpg";function A(){return Object(c.jsx)("div",{className:"bg-white p-4",children:Object(c.jsx)("div",{className:"flex-auto",children:Object(c.jsx)("a",{href:"https://www.dh.nrw/",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("img",{className:"md:px-20 max-w-full float-right",src:k,alt:"Sponsor Image"})})})})}var w=function(){return Object(c.jsxs)("div",{className:"max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center",children:[Object(c.jsx)(l,{}),Object(c.jsx)(m,{}),Object(c.jsx)(A,{}),Object(c.jsx)(j,{})]})};n(12);a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.18c7bef3.chunk.js.map