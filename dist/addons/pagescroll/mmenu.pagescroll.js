Mmenu.addons.pageScroll=function(){var i,l=this,e=this.opts.pageScroll,o=this.conf.pageScroll;function s(e){i&&i.length&&i.is(":visible")&&Mmenu.$("html, body").animate({scrollTop:i.offset().top+e}),i=Mmenu.$()}function r(e){try{return!("#"==e||"#"!=e.slice(0,1)||!Mmenu.node.$page.find(e).length)}catch(e){return!1}}if("boolean"==typeof e&&(e={scroll:e}),this.opts.pageScroll=Mmenu.extend(e,Mmenu.options.pageScroll),e.scroll&&this.bind("close:finish",function(){s(o.scrollOffset)}),this.opts.offCanvas&&e.scroll&&this.clck.push(function(e,n){if(i=Mmenu.$(),n.inMenu&&n.inListview){var t=e.getAttribute("href");if(r(t)){if(i=Mmenu.$(t),!l.node.menu.classList.contains("mm-menu_sidebar-expanded")||!Mmenu.$("html").hasClass("mm-wrapper_sidebar-expanded"))return{close:!0};s(l.conf.pageScroll.scrollOffset)}}}),e.update){var c=[],f=[];this.bind("initListview:after",function(e){Mmenu.filterListItemAnchors(e.find(".mm-listview").children("li")).each(function(e,n){var t=n.getAttribute("href");r(t)&&c.push(t)}),f=c.reverse()});var a=-1;Mmenu.$(window).on("scroll.mm-pageScroll",function(e){for(var n=Mmenu.$(window).scrollTop(),t=0;t<f.length;t++)if(Mmenu.$(f[t]).offset().top<n+o.updateOffset){a!==t&&(a=t,l.setSelected(Mmenu.filterListItemAnchors(Mmenu.$(l.node.pnls).children(".mm-panel_opened").find(".mm-listview").children("li")).filter('[href="'+f[t]+'"]').parent()));break}})}},Mmenu.options.pageScroll={scroll:!1,update:!1},Mmenu.configs.pageScroll={scrollOffset:0,updateOffset:50};