/*!
 * VERSION: 0.4.0
 * DATE: 2016-07-09
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope=(typeof(module)!=="undefined"&&module.exports&&typeof(global)!=="undefined")?global:this||window;(function(window){"use strict";var _globals=window.GreenSockGlobals||window,_namespace=function(ns){var a=ns.split("."),p=_globals,i;for(i=0;i<a.length;i++){p[a[i]]=p=p[a[i]]||{};}
return p;},pkg=_namespace("com.greensock.utils"),_getText=function(e){var type=e.nodeType,result="";if(type===1||type===9||type===11){if(typeof(e.textContent)==="string"){return e.textContent;}else{for(e=e.firstChild;e;e=e.nextSibling){result+=_getText(e);}}}else if(type===3||type===4){return e.nodeValue;}
return result;},_doc=document,_getComputedStyle=_doc.defaultView?_doc.defaultView.getComputedStyle:function(){},_capsExp=/([A-Z])/g,_getStyle=function(t,p,cs,str){var result;if((cs=cs||_getComputedStyle(t,null))){t=cs.getPropertyValue(p.replace(_capsExp,"-$1").toLowerCase());result=(t||cs.length)?t:cs[p];}else if(t.currentStyle){cs=t.currentStyle;result=cs[p];}
return str?result:parseInt(result,10)||0;},_isArrayLike=function(e){return(e.length&&e[0]&&((e[0].nodeType&&e[0].style&&!e.nodeType)||(e[0].length&&e[0][0])))?true:false;},_flattenArray=function(a){var result=[],l=a.length,i,e,j;for(i=0;i<l;i++){e=a[i];if(_isArrayLike(e)){j=e.length;for(j=0;j<e.length;j++){result.push(e[j]);}}else{result.push(e);}}
return result;},_stripExp=/(?:\r|\n|\s\s|\t\t)/g,_brSwap=")eefec303079ad17405c",_brExp=/(?:<br>|<br\/>|<br \/>)/gi,_isOldIE=(_doc.all&&!_doc.addEventListener),_divStart=" style='position:relative;display:inline-block;"+(_isOldIE?"*display:inline;*zoom:1;'":"'"),_cssClassFunc=function(cssClass,tag){cssClass=cssClass||"";var iterate=(cssClass.indexOf("++")!==-1),num=1;if(iterate){cssClass=cssClass.split("++").join("");}
return function(){return"<"+tag+_divStart+(cssClass?" class='"+cssClass+(iterate?num++:"")+"'>":">");};},SplitText=pkg.SplitText=_globals.SplitText=function(element,vars){if(typeof(element)==="string"){element=SplitText.selector(element);}
if(!element){throw("cannot split a null element.");}
this.elements=_isArrayLike(element)?_flattenArray(element):[element];this.chars=[];this.words=[];this.lines=[];this._originals=[];this.vars=vars||{};this.split(vars);},_swapText=function(element,oldText,newText){var type=element.nodeType;if(type===1||type===9||type===11){for(element=element.firstChild;element;element=element.nextSibling){_swapText(element,oldText,newText);}}else if(type===3||type===4){element.nodeValue=element.nodeValue.split(oldText).join(newText);}},_pushReversed=function(a,merge){var i=merge.length;while(--i>-1){a.push(merge[i]);}},_split=function(element,vars,allChars,allWords,allLines){if(_brExp.test(element.innerHTML)){element.innerHTML=element.innerHTML.replace(_brExp,_brSwap);}
var text=_getText(element),tag=vars.span?"span":"div",types=vars.type||vars.split||"chars,words,lines",lines=(types.indexOf("lines")!==-1)?[]:null,words=(types.indexOf("words")!==-1),chars=(types.indexOf("chars")!==-1),absolute=(vars.position==="absolute"||vars.absolute===true),wordDelimiter=vars.wordDelimiter||" ",space=wordDelimiter!==" "?"":(absolute?"&#173; ":" "),lineOffsetY=-999,cs=_getComputedStyle(element),paddingLeft=_getStyle(element,"paddingLeft",cs),borderTopAndBottom=_getStyle(element,"borderBottomWidth",cs)+_getStyle(element,"borderTopWidth",cs),borderLeftAndRight=_getStyle(element,"borderLeftWidth",cs)+_getStyle(element,"borderRightWidth",cs),padTopAndBottom=_getStyle(element,"paddingTop",cs)+_getStyle(element,"paddingBottom",cs),padLeftAndRight=_getStyle(element,"paddingLeft",cs)+_getStyle(element,"paddingRight",cs),textAlign=_getStyle(element,"textAlign",cs,true),lineThreshold=_getStyle(element,"fontSize")*0.2,origHeight=element.clientHeight,origWidth=element.clientWidth,wordEnd=vars.span?"</span>":"</div>",wordStart=_cssClassFunc(vars.wordsClass,tag),charStart=_cssClassFunc(vars.charsClass,tag),iterateLine=((vars.linesClass||"").indexOf("++")!==-1),linesClass=vars.linesClass,hasTagStart=text.indexOf("<")!==-1,wordIsOpen=true,charArray=[],wordArray=[],lineArray=[],l,curLine,isChild,splitText,i,j,character,nodes,node,offset,lineNode,style,lineWidth,addWordSpaces;if(!vars.reduceWhiteSpace!==false){text=text.replace(_stripExp,"");}
if(iterateLine){linesClass=linesClass.split("++").join("");}
if(hasTagStart){text=text.split("<").join("{{LT}}");}
l=text.length;splitText=wordStart();for(i=0;i<l;i++){character=text.charAt(i);if(character===")"&&text.substr(i,20)===_brSwap){splitText+=(wordIsOpen?wordEnd:"")+"<BR/>";wordIsOpen=false;if(i!==l-20&&text.substr(i+20,20)!==_brSwap){splitText+=" "+wordStart();wordIsOpen=true;}
i+=19;}else if(character===wordDelimiter&&text.charAt(i-1)!==wordDelimiter&&i!==l-1&&text.substr(i-20,20)!==_brSwap){splitText+=wordIsOpen?wordEnd:"";wordIsOpen=false;while(text.charAt(i+1)===wordDelimiter){splitText+=space;i++;}
if(text.charAt(i+1)!==")"||text.substr(i+1,20)!==_brSwap){splitText+=space+wordStart();wordIsOpen=true;}}else if(character==="{"&&text.substr(i,6)==="{{LT}}"){splitText+=chars?charStart()+"{{LT}}"+"</"+tag+">":"{{LT}}";i+=5;}else{splitText+=(chars&&character!==" ")?charStart()+character+"</"+tag+">":character;}}
element.innerHTML=splitText+(wordIsOpen?wordEnd:"");if(hasTagStart){_swapText(element,"{{LT}}","<");}
j=element.getElementsByTagName("*");l=j.length;nodes=[];for(i=0;i<l;i++){nodes[i]=j[i];}
if(lines||absolute){for(i=0;i<l;i++){node=nodes[i];isChild=(node.parentNode===element);if(isChild||absolute||(chars&&!words)){offset=node.offsetTop;if(lines&&isChild&&Math.abs(offset-lineOffsetY)>lineThreshold&&node.nodeName!=="BR"){curLine=[];lines.push(curLine);lineOffsetY=offset;}
if(absolute){node._x=node.offsetLeft;node._y=offset;node._w=node.offsetWidth;node._h=node.offsetHeight;}
if(lines){if(words===isChild||!chars){curLine.push(node);node._x-=paddingLeft;}
if(isChild&&i){nodes[i-1]._wordEnd=true;}
if(node.nodeName==="BR"&&node.nextSibling&&node.nextSibling.nodeName==="BR"){lines.push([]);}}}}}
for(i=0;i<l;i++){node=nodes[i];isChild=(node.parentNode===element);if(node.nodeName==="BR"){if(lines||absolute){element.removeChild(node);nodes.splice(i--,1);l--;}else if(!words){element.appendChild(node);}
continue;}
if(absolute){style=node.style;if(!words&&!isChild){node._x+=node.parentNode._x;node._y+=node.parentNode._y;}
style.left=node._x+"px";style.top=node._y+"px";style.position="absolute";style.display="block";style.width=(node._w+1)+"px";style.height=node._h+"px";}
if(!words){if(isChild){element.removeChild(node);nodes.splice(i--,1);l--;}else if(!isChild&&chars){offset=(!lines&&!absolute&&node.nextSibling);element.appendChild(node);if(!offset){element.appendChild(_doc.createTextNode(" "));}
charArray.push(node);}}else if(isChild&&node.innerHTML!==""){wordArray.push(node);}else if(chars){charArray.push(node);}}
if(lines){if(absolute){lineNode=_doc.createElement(tag);element.appendChild(lineNode);lineWidth=lineNode.offsetWidth+"px";offset=(lineNode.offsetParent===element)?0:element.offsetLeft;element.removeChild(lineNode);}
style=element.style.cssText;element.style.cssText="display:none;";while(element.firstChild){element.removeChild(element.firstChild);}
addWordSpaces=(wordDelimiter===" "&&(!absolute||(!words&&!chars)));for(i=0;i<lines.length;i++){curLine=lines[i];lineNode=_doc.createElement(tag);lineNode.style.cssText="display:block;text-align:"+textAlign+";position:"+(absolute?"absolute;":"relative;");if(linesClass){lineNode.className=linesClass+(iterateLine?i+1:"");}
lineArray.push(lineNode);l=curLine.length;for(j=0;j<l;j++){if(curLine[j].nodeName!=="BR"){node=curLine[j];lineNode.appendChild(node);if(addWordSpaces&&(node._wordEnd||words)){lineNode.appendChild(_doc.createTextNode(" "));}
if(absolute){if(j===0){lineNode.style.top=node._y+"px";lineNode.style.left=(paddingLeft+offset)+"px";}
node.style.top="0px";if(offset){node.style.left=(node._x-offset)+"px";}}}}
if(l===0){lineNode.innerHTML="&nbsp;";}
if(!words&&!chars){lineNode.innerHTML=_getText(lineNode).split(String.fromCharCode(160)).join(" ");}
if(absolute){lineNode.style.width=lineWidth;lineNode.style.height=node._h+"px";}
element.appendChild(lineNode);}
element.style.cssText=style;}
if(absolute){if(origHeight>element.clientHeight){element.style.height=(origHeight-padTopAndBottom)+"px";if(element.clientHeight<origHeight){element.style.height=(origHeight+borderTopAndBottom)+"px";}}
if(origWidth>element.clientWidth){element.style.width=(origWidth-padLeftAndRight)+"px";if(element.clientWidth<origWidth){element.style.width=(origWidth+borderLeftAndRight)+"px";}}}
_pushReversed(allChars,charArray);_pushReversed(allWords,wordArray);_pushReversed(allLines,lineArray);},p=SplitText.prototype;p.split=function(vars){if(this.isSplit){this.revert();}
this.vars=vars||this.vars;this._originals.length=this.chars.length=this.words.length=this.lines.length=0;var i=this.elements.length;while(--i>-1){this._originals[i]=this.elements[i].innerHTML;_split(this.elements[i],this.vars,this.chars,this.words,this.lines);}
this.chars.reverse();this.words.reverse();this.lines.reverse();this.isSplit=true;return this;};p.revert=function(){if(!this._originals){throw("revert() call wasn't scoped properly.");}
var i=this._originals.length;while(--i>-1){this.elements[i].innerHTML=this._originals[i];}
this.chars=[];this.words=[];this.lines=[];this.isSplit=false;return this;};SplitText.selector=window.$||window.jQuery||function(e){var selector=window.$||window.jQuery;if(selector){SplitText.selector=selector;return selector(e);}
return(typeof(document)==="undefined")?e:(document.querySelectorAll?document.querySelectorAll(e):document.getElementById((e.charAt(0)==="#")?e.substr(1):e));};SplitText.version="0.4.0";})(_gsScope);