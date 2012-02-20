/**
 * --------------------------------------------------------------------
 * jQuery-Plugin "visualize"
 * by Scott Jehl, scott@filamentgroup.com
 * http://www.filamentgroup.com
 * Copyright (c) 2009 Filament Group 
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 * 	
 * --------------------------------------------------------------------
 */
(function(a){a.fn.visualize=function(c,b){return a(this).each(function(){var s=a.extend({type:"bar",width:a(this).width(),height:a(this).height(),appendTitle:true,title:null,appendKey:true,colors:["#be1e2d","#666699","#92d5ea","#ee8310","#8d10ee","#5a3b16","#26a4ed","#f45a90","#e9e744"],textColors:[],parseDirection:"x",pieMargin:20,pieLabelPos:"inside",lineWeight:4,barGroupMargin:10,barMargin:1},c);s.width=parseInt(s.width,10);s.height=parseInt(s.height,10);var r=a(this);function A(){var o=s.colors;var C=s.textColors;var B={dataGroups:function(){var D=[];if(s.parseDirection=="x"){r.find("tr:gt(0)").each(function(G){D[G]={};D[G].points=[];D[G].color=o[G];if(C[G]){D[G].textColor=C[G]}a(this).find("td").each(function(){D[G].points.push(parseInt(a(this).text(),10))})})}else{var F=r.find("tr:eq(1) td").size();for(var E=0;E<F;E++){D[E]={};D[E].points=[];D[E].color=o[E];if(C[E]){D[E].textColor=C[E]}r.find("tr:gt(0)").each(function(){D[E].points.push(a(this).find("td").eq(E).text()*1)})}}return D},allData:function(){var D=[];a(this.dataGroups()).each(function(){D.push(this.points)});return D},dataSum:function(){var E=0;var D=this.allData().join(",").split(",");a(D).each(function(){E+=parseInt(this,10)});return E},topValue:function(){var E=0;var D=this.allData().join(",").split(",");a(D).each(function(){if(parseInt(this,10)>E){E=parseInt(this,10)}});return E},bottomValue:function(){var E=0;var D=this.allData().join(",").split(",");a(D).each(function(){if(this<E){E=parseInt(this,10)}});return E},memberTotals:function(){var E=[];var D=this.dataGroups();a(D).each(function(F){var G=0;a(D[F].points).each(function(H){G+=D[F].points[H]});E.push(G)});return E},yTotals:function(){var G=[];var E=this.dataGroups();var H=this.xLabels().length;for(var F=0;F<H;F++){G[F]=[];var D=0;a(E).each(function(I){G[F].push(this.points[F])});G[F].join(",").split(",");a(G[F]).each(function(){D+=parseInt(this)});G[F]=D}return G},topYtotal:function(){var D=0;var E=this.yTotals().join(",").split(",");a(E).each(function(){if(parseInt(this,10)>D){D=parseInt(this,10)}});return D},totalYRange:function(){return this.topValue()+Math.abs(this.bottomValue())},xLabels:function(){var D=[];if(s.parseDirection=="x"){r.find("tr:eq(0) th").each(function(){D.push(a(this).html())})}else{r.find("tr:gt(0) th").each(function(){D.push(a(this).html())})}return D},yLabels:function(){var H=[];var E=s.height;var G=Math.round(E/30);var F=Math.round(this.totalYRange()/Math.floor(G));for(var D=this.bottomValue();D<=p;D+=F){H.push(D)}if(H[H.length-1]!=this.topValue()){H.pop();H.push(this.topValue())}return H}};return B}var x={pie:function(){l.addClass("visualize-pie");if(s.pieLabelPos=="outside"){l.addClass("visualize-pie-outside")}var E=Math.round(h.width()/2);var D=Math.round(h.height()/2);var o=D-s.pieMargin;var B=0;var C=function(G){return(Math.PI/180)*G};var F=a('<ul class="visualize-labels"></ul>').insertAfter(h);a.each(n,function(L){var P=(this<0)?0:this/m;t.beginPath();t.moveTo(E,D);t.arc(E,D,o,B*Math.PI*2-Math.PI*0.5,(B+P)*Math.PI*2-Math.PI*0.5,false);t.lineTo(E,D);t.closePath();t.fillStyle=e[L].color;t.fill();var N=(B+P/2);var G=s.pieLabelPos=="inside"?o/1.5:o+o/5;var K=Math.round(E+Math.sin(N*Math.PI*2)*(G));var J=Math.round(D-Math.cos(N*Math.PI*2)*(G));var H=(K>E)?"right":"left";var I=(J>D)?"bottom":"top";var O=a('<span class="visualize-label">'+Math.round(P*100)+"%</span>").css(H,0).css(I,0);var M=a('<li class="visualize-label-pos"></li>').appendTo(F).css({left:K,top:J}).append(O);O.css("font-size",o/8).css("margin-"+H,-O.width()/2).css("margin-"+I,-O.outerHeight()/2);if(e[L].textColor){O.css("color",e[L].textColor)}B+=P})},line:function(E){if(E){l.addClass("visualize-area")}else{l.addClass("visualize-line")}var F=h.width()/(q.length-1);var C=a('<ul class="visualize-labels-x"></ul>').width(h.width()).height(h.height()).insertBefore(h);a.each(q,function(I){var G=a("<li><span>"+this+"</span></li>").prepend('<span class="line" />').css("left",F*I).appendTo(C);var H=G.find("span:not(.line)");var J=H.width()/-2;if(I==0){J=0}else{if(I==q.length-1){J=-H.width()}}H.css("margin-left",J).addClass("label")});var D=h.height()/d;var o=h.height()/(y.length-1);var B=a('<ul class="visualize-labels-y"></ul>').width(h.width()).height(h.height()).insertBefore(h);a.each(y,function(J){var G=a("<li><span>"+this+"</span></li>").prepend('<span class="line"  />').css("bottom",o*J).prependTo(B);var H=G.find("span:not(.line)");var I=H.height()/-2;if(J==0){I=-H.height()}else{if(J==y.length-1){I=0}}H.css("margin-top",I).addClass("label")});t.translate(0,f);a.each(e,function(I){t.beginPath();t.lineWidth=s.lineWeight;t.lineJoin="round";var H=this.points;var G=0;t.moveTo(0,-(H[0]*D));a.each(H,function(){t.lineTo(G,-(this*D));G+=F});t.strokeStyle=this.color;t.stroke();if(E){t.lineTo(G,0);t.lineTo(0,0);t.closePath();t.fillStyle=this.color;t.globalAlpha=0.3;t.fill();t.globalAlpha=1}else{t.closePath()}})},area:function(){x.line(true)},bar:function(){l.addClass("visualize-bar");var I=h.width()/(q.length);var E=a('<ul class="visualize-labels-x"></ul>').width(h.width()).height(h.height()).insertBefore(h);a.each(q,function(O){var M=a('<li><span class="label">'+this+"</span></li>").prepend('<span class="line" />').css("left",I*O).width(I).appendTo(E);var N=M.find("span.label");N.addClass("label")});var o=h.height()/d;var F=h.height()/(y.length-1);var K=a('<ul class="visualize-labels-y"></ul>').width(h.width()).height(h.height()).insertBefore(h);a.each(y,function(P){var M=a("<li><span>"+this+"</span></li>").prepend('<span class="line"  />').css("bottom",F*P).prependTo(K);var N=M.find("span:not(.line)");var O=N.height()/-2;if(P==0){O=-N.height()}else{if(P==y.length-1){O=0}}N.css("margin-top",O).addClass("label")});t.translate(0,f);for(var D=0;D<e.length;D++){t.beginPath();var G=(I-s.barGroupMargin*2)/e.length;var H=G-(s.barMargin*2);t.lineWidth=H;var J=e[D].points;var C=0;for(var B=0;B<J.length;B++){var L=(C-s.barGroupMargin)+(D*G)+G/2;L+=s.barGroupMargin*2;t.moveTo(L,0);t.lineTo(L,Math.round(-J[B]*o));C+=I}t.strokeStyle=e[D].color;t.stroke();t.closePath()}}};var k=document.createElement("canvas");var h=a(k).attr({height:s.height,width:s.width});var l=(b||a('<div class="visualize" role="presentation" />')).height(s.height).width(s.width).append(h);var g=A();var e=g.dataGroups();var w=g.allData();var m=g.dataSum();var p=g.topValue();var j=g.bottomValue();var n=g.memberTotals();var d=g.totalYRange();var f=s.height*(p/d);var q=g.xLabels();var y=g.yLabels();if(s.appendTitle||s.appendKey){var i=a('<div class="visualize-info"></div>').appendTo(l)}if(s.appendTitle){var z=s.title||r.find("caption").text();a('<div class="visualize-title">'+z+"</div>").appendTo(i)}if(s.appendKey){var v=a('<ul class="visualize-key"></ul>');var u=(s.parseDirection=="x")?"tr:gt(0) th":"tr:eq(0) th";r.find(u).each(function(o){a('<li><span class="visualize-key-color" style="background: '+e[o].color+'"></span><span class="visualize-key-label">'+a(this).text()+"</span></li>").appendTo(v)});v.appendTo(i)}if(!b){l.insertAfter(this)}if(typeof(G_vmlCanvasManager)!="undefined"){G_vmlCanvasManager.initElement(h[0])}var t=h[0].getContext("2d");x[s.type]();a(".visualize-line li:first-child span.line, .visualize-line li:last-child span.line, .visualize-area li:first-child span.line, .visualize-area li:last-child span.line, .visualize-bar li:first-child span.line,.visualize-bar .visualize-labels-y li:last-child span.line").css("border","none");if(!b){l.bind("visualizeRefresh",function(){r.visualize(s,a(this).empty())})}}).next()}})(jQuery);$(function(){$("table td").click(function(){if(!$(this).is(".input")){$(this).addClass("input").html('<input type="text" value="'+$(this).text()+'" />').find("input").focus().blur(function(){$(this).parent().removeClass("input").html($(this).val()||0);$(".visualize").trigger("visualizeRefresh")})}}).hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")})});