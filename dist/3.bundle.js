(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(4)),o=c(n(5)),i=c(n(6)),l=c(n(37)),r=c(n(21)),s=c(n(1)),u=c(n(2)),d=n(181);function c(e){return e&&e.__esModule?e:{default:e}}var p=function(){function e(){(0,s.default)(this,e),this.map=null,this.controls=[],this.initializedCenter=!1}return(0,u.default)(e,[{key:"isInitialized",value:function(){return null!==this.map&&(0,r.default)(this.map).length>0}},{key:"loadMap",value:function(e,t){this.map=new BMap.Map(t,{enableMapClick:!1}),this.map.enableScrollWheelZoom(),this.map.addControl(new BMap.MapTypeControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_SMALL})),this.map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL,enableGeolocation:!1}))}},{key:"setCenter",value:function(e){this.initializedCenter?this.map.setCenter(e):(this.map.centerAndZoom(e,19),this.initializedCenter=!0)}},{key:"setZoom",value:function(e){this.map.setZoom(e)}},{key:"addEventHandler",value:function(e,t){this.map.addEventListener(e,(function(e){var n=e.point;t(n)}))}},{key:"createPoint",value:function(e){var t=e.lat,n=e.lng;return new BMap.Point(n,t)}},{key:"createMarker",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=null;t&&(a=new BMap.Label(t,{point:e,offset:new BMap.Size(15,-15)}));var o=new BMap.Marker(e,{label:a,enableDragging:n,rotation:5});return o.setLabel(a),this.map.addOverlay(o),o}},{key:"createPolyline",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,o={geodesic:!0,strokeColor:t,strokeOpacity:n,strokeWeight:a},i=new BMap.Polyline(e,o);return this.map.addOverlay(i),i}},{key:"createControl",value:function(e){var t=e.text,n=e.tip,a=e.color,o=e.offsetX,i=e.offsetY,l=e.onClickHandler,r=new f(t,n,a,new BMap.Size(o,i),l);this.map.addControl(r),this.controls.push(r)}},{key:"disableControls",value:function(){var e=this;this.controls.forEach((function(t){e.map.removeControl(t)}))}},{key:"enableControls",value:function(){var e=this;this.controls.forEach((function(t){e.map.addControl(t)}))}},{key:"getMarkerPosition",value:function(e){return e.getPosition()}},{key:"updatePolyline",value:function(e,t){e.setPath(t)}},{key:"removePolyline",value:function(e){this.map.removeOverlay(e)}},{key:"applyCoordinateOffset",value:function(e){var t=(0,l.default)(e,2),n=t[0],a=t[1];return(0,d.WGS84ToBD09LL)(n,a)}}]),e}();t.default=p;var f=function(e){function t(e,n,i,l,r){var u;(0,s.default)(this,t);for(var d=arguments.length,c=Array(d>5?d-5:0),p=5;p<d;p++)c[p-5]=arguments[p];var f=(0,o.default)(this,(u=t.__proto__||(0,a.default)(t)).call.apply(u,[this].concat(c)));return f.defaultAnchor=BMAP_ANCHOR_TOP_LEFT,f.defaultOffset=l,f.onClickHandler=r,f.title=n,f.text=e,f.backgroundColor=i,f}return(0,i.default)(t,e),(0,u.default)(t,[{key:"initialize",value:function(e){var t=this,n=document.createElement("div"),a=document.createElement("div");a.style.backgroundColor=this.backgroundColor,a.style.border="2px solid #fff",a.style.borderRadius="3px",a.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",a.style.cursor="pointer",a.style.marginBottom="22px",a.style.textAlign="center",a.title=this.title,n.appendChild(a);var o=document.createElement("div");return o.style.color="rgb(25,25,25)",o.style.fontFamily="Roboto,Arial,sans-serif",o.style.fontSize="16px",o.style.lineHeight="38px",o.style.paddingLeft="5px",o.style.paddingRight="5px",o.innerHTML=this.text,a.appendChild(o),e.getContainer().appendChild(n),a.addEventListener("click",(function(){t.onClickHandler(o)})),n}}]),t}(BMap.Control)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb24vQmFpZHVNYXBBZGFwdGVyLmpzIl0sIm5hbWVzIjpbIkJhaWR1TWFwQWRhcHRlciIsInRoaXMiLCJtYXAiLCJjb250cm9scyIsImluaXRpYWxpemVkQ2VudGVyIiwibGVuZ3RoIiwiaW5pdFBvaW50IiwiZGl2RWxlbWVudE5hbWUiLCJCTWFwIiwiTWFwIiwiZW5hYmxlTWFwQ2xpY2siLCJlbmFibGVTY3JvbGxXaGVlbFpvb20iLCJhZGRDb250cm9sIiwiTWFwVHlwZUNvbnRyb2wiLCJhbmNob3IiLCJCTUFQX0FOQ0hPUl9UT1BfTEVGVCIsInR5cGUiLCJCTUFQX05BVklHQVRJT05fQ09OVFJPTF9TTUFMTCIsIk5hdmlnYXRpb25Db250cm9sIiwiQk1BUF9BTkNIT1JfQk9UVE9NX1JJR0hUIiwiZW5hYmxlR2VvbG9jYXRpb24iLCJwb2ludCIsInNldENlbnRlciIsImNlbnRlckFuZFpvb20iLCJ6b29tIiwic2V0Wm9vbSIsImV2ZW50TmFtZSIsImhhbmRsZXJGdW5jdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNsaWNrZWRMYXRMbmciLCJsYXQiLCJsbmciLCJQb2ludCIsInRpdGxlIiwiZHJhZ2dhYmxlIiwibGFiZWwiLCJMYWJlbCIsIm9mZnNldCIsIlNpemUiLCJtYXJrZXIiLCJNYXJrZXIiLCJlbmFibGVEcmFnZ2luZyIsInJvdGF0aW9uIiwic2V0TGFiZWwiLCJhZGRPdmVybGF5IiwicGF0aCIsImNvbG9yIiwib3BhY2l0eSIsIndlaWdodCIsIm9wdGlvbnMiLCJnZW9kZXNpYyIsInN0cm9rZUNvbG9yIiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZVdlaWdodCIsInBvbHlsaW5lIiwiUG9seWxpbmUiLCJ0ZXh0IiwidGlwIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJvbkNsaWNrSGFuZGxlciIsIm15Q29udHJvbCIsInB1c2giLCJmb3JFYWNoIiwiY29udHJvbCIsInJlbW92ZUNvbnRyb2wiLCJnZXRQb3NpdGlvbiIsIm5ld1BhdGgiLCJzZXRQYXRoIiwicmVtb3ZlT3ZlcmxheSIsIldHUzg0VG9CRDA5TEwiLCJhcmdzIiwiZGVmYXVsdEFuY2hvciIsImRlZmF1bHRPZmZzZXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250cm9sRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udHJvbFVJIiwic3R5bGUiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJjdXJzb3IiLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJhcHBlbmRDaGlsZCIsImNvbnRyb2xUZXh0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiaW5uZXJIVE1MIiwiZ2V0Q29udGFpbmVyIiwiQ29udHJvbCJdLCJtYXBwaW5ncyI6IndPQUFBLFMsdURBRXFCQSxFLFdBQ25CLGNBQWMscUJBQ1pDLEtBQUtDLElBQU0sS0FDWEQsS0FBS0UsU0FBVyxHQUNoQkYsS0FBS0csbUJBQW9CLEUsNkRBSXpCLE9BQW9CLE9BQWJILEtBQUtDLE1BQWdCLGFBQVlELEtBQUtDLEtBQUtHLE9BQVMsSSw4QkFHckRDLEVBQVdDLEdBQ2pCTixLQUFLQyxJQUFNLElBQUlNLEtBQUtDLElBQUlGLEVBQWdCLENBQUVHLGdCQUFnQixJQUUxRFQsS0FBS0MsSUFBSVMsd0JBQ1RWLEtBQUtDLElBQUlVLFdBQ1AsSUFBSUosS0FBS0ssZUFBZSxDQUN0QkMsT0FBUUMscUJBQ1JDLEtBQU1DLGlDQUdWaEIsS0FBS0MsSUFBSVUsV0FDUCxJQUFJSixLQUFLVSxrQkFBa0IsQ0FDekJKLE9BQVFLLHlCQUNSSCxLQUFNQyw4QkFDTkcsbUJBQW1CLE8sZ0NBS2ZDLEdBQ0pwQixLQUFLRyxrQkFDUEgsS0FBS0MsSUFBSW9CLFVBQVVELElBRW5CcEIsS0FBS0MsSUFBSXFCLGNBQWNGLEVBQU8sSUFDOUJwQixLQUFLRyxtQkFBb0IsSyw4QkFJckJvQixH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QWEsMEJBQy9CRCxFQUFZUixNQUFNVSxTQUFXLE9BQzdCRixFQUFZUixNQUFNVyxXQUFhLE9BQy9CSCxFQUFZUixNQUFNWSxZQUFjLE1BQ2hDSixFQUFZUixNQUFNYSxhQUFlLE1BQ2pDTCxFQUFZTSxVQUFZN0YsS0FBS3dELEtBQzdCc0IsRUFBVVEsWUFBWUMsR0FFdEJ0RixFQUFJNkYsZUFBZVIsWUFBWVgsR0FFL0JHLEVBQVVuRCxpQkFBaUIsU0FBUyxXQUNsQyxFQUFLaUMsZUFBZTJCLE1BR2ZaLE0sR0EzQ3FCcEUsS0FBS3dGIiwiZmlsZSI6IjMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV0dTODRUb0JEMDlMTCB9IGZyb20gJ3V0aWxzL2Nvb3JkaW5hdGVfY29udmVydGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFpZHVNYXBBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYXAgPSBudWxsO1xuICAgIHRoaXMuY29udHJvbHMgPSBbXTtcbiAgICB0aGlzLmluaXRpYWxpemVkQ2VudGVyID0gZmFsc2U7XG4gIH1cblxuICBpc0luaXRpYWxpemVkKCkge1xuICAgIHJldHVybiB0aGlzLm1hcCAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0aGlzLm1hcCkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGxvYWRNYXAoaW5pdFBvaW50LCBkaXZFbGVtZW50TmFtZSkge1xuICAgIHRoaXMubWFwID0gbmV3IEJNYXAuTWFwKGRpdkVsZW1lbnROYW1lLCB7IGVuYWJsZU1hcENsaWNrOiBmYWxzZSB9KTtcblxuICAgIHRoaXMubWFwLmVuYWJsZVNjcm9sbFdoZWVsWm9vbSgpO1xuICAgIHRoaXMubWFwLmFkZENvbnRyb2woXG4gICAgICBuZXcgQk1hcC5NYXBUeXBlQ29udHJvbCh7XG4gICAgICAgIGFuY2hvcjogQk1BUF9BTkNIT1JfVE9QX0xFRlQsXG4gICAgICAgIHR5cGU6IEJNQVBfTkFWSUdBVElPTl9DT05UUk9MX1NNQUxMLFxuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLm1hcC5hZGRDb250cm9sKFxuICAgICAgbmV3IEJNYXAuTmF2aWdhdGlvbkNvbnRyb2woe1xuICAgICAgICBhbmNob3I6IEJNQVBfQU5DSE9SX0JPVFRPTV9SSUdIVCxcbiAgICAgICAgdHlwZTogQk1BUF9OQVZJR0FUSU9OX0NPTlRST0xfU01BTEwsXG4gICAgICAgIGVuYWJsZUdlb2xvY2F0aW9uOiBmYWxzZSxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBzZXRDZW50ZXIocG9pbnQpIHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZENlbnRlcikge1xuICAgICAgdGhpcy5tYXAuc2V0Q2VudGVyKHBvaW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAuY2VudGVyQW5kWm9vbShwb2ludCwgMTkpO1xuICAgICAgdGhpcy5pbml0aWFsaXplZENlbnRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2V0Wm9vbSh6b29tKSB7XG4gICAgdGhpcy5tYXAuc2V0Wm9vbSh6b29tKTtcbiAgfVxuXG4gIGFkZEV2ZW50SGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXJGdW5jdGlvbikge1xuICAgIHRoaXMubWFwLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrZWRMYXRMbmcgPSBldmVudC5wb2ludDtcbiAgICAgIGhhbmRsZXJGdW5jdGlvbihjbGlja2VkTGF0TG5nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVBvaW50KHsgbGF0LCBsbmcgfSkge1xuICAgIHJldHVybiBuZXcgQk1hcC5Qb2ludChsbmcsIGxhdCk7XG4gIH1cblxuICBjcmVhdGVNYXJrZXIocG9pbnQsIHRpdGxlLCBkcmFnZ2FibGUgPSB0cnVlKSB7XG4gICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGxhYmVsID0gbmV3IEJNYXAuTGFiZWwodGl0bGUsIHtcbiAgICAgICAgcG9pbnQsXG4gICAgICAgIG9mZnNldDogbmV3IEJNYXAuU2l6ZSgxNSwgLTE1KSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBCTWFwLk1hcmtlcihwb2ludCwge1xuICAgICAgbGFiZWwsXG4gICAgICBlbmFibGVEcmFnZ2luZzogZHJhZ2dhYmxlLFxuICAgICAgcm90YXRpb246IDUsXG4gICAgfSk7XG4gICAgbWFya2VyLnNldExhYmVsKGxhYmVsKTtcbiAgICB0aGlzLm1hcC5hZGRPdmVybGF5KG1hcmtlcik7XG4gICAgcmV0dXJuIG1hcmtlcjtcbiAgfVxuXG4gIGNyZWF0ZVBvbHlsaW5lKHBhdGgsIGNvbG9yLCBvcGFjaXR5ID0gMS4wLCB3ZWlnaHQgPSAyLjApIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgZ2VvZGVzaWM6IHRydWUsXG4gICAgICBzdHJva2VDb2xvcjogY29sb3IsXG4gICAgICBzdHJva2VPcGFjaXR5OiBvcGFjaXR5LFxuICAgICAgc3Ryb2tlV2VpZ2h0OiB3ZWlnaHQsXG4gICAgfTtcbiAgICBjb25zdCBwb2x5bGluZSA9IG5ldyBCTWFwLlBvbHlsaW5lKHBhdGgsIG9wdGlvbnMpO1xuICAgIHRoaXMubWFwLmFkZE92ZXJsYXkocG9seWxpbmUpO1xuICAgIHJldHVybiBwb2x5bGluZTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2woe1xuICAgIHRleHQsIHRpcCwgY29sb3IsIG9mZnNldFgsIG9mZnNldFksIG9uQ2xpY2tIYW5kbGVyLFxuICB9KSB7XG4gICAgY29uc3QgbXlDb250cm9sID0gbmV3IE5hdmlnYXRpb25Db250cm9sKFxuICAgICAgdGV4dCxcbiAgICAgIHRpcCxcbiAgICAgIGNvbG9yLFxuICAgICAgbmV3IEJNYXAuU2l6ZShvZmZzZXRYLCBvZmZzZXRZKSxcbiAgICAgIG9uQ2xpY2tIYW5kbGVyLFxuICAgICk7XG4gICAgdGhpcy5tYXAuYWRkQ29udHJvbChteUNvbnRyb2wpO1xuICAgIHRoaXMuY29udHJvbHMucHVzaChteUNvbnRyb2wpO1xuICB9XG5cbiAgZGlzYWJsZUNvbnRyb2xzKCkge1xuICAgIHRoaXMuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlQ29udHJvbChjb250cm9sKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZUNvbnRyb2xzKCkge1xuICAgIHRoaXMuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgdGhpcy5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldE1hcmtlclBvc2l0aW9uKG1hcmtlcikge1xuICAgIHJldHVybiBtYXJrZXIuZ2V0UG9zaXRpb24oKTtcbiAgfVxuXG4gIHVwZGF0ZVBvbHlsaW5lKHBvbHlsaW5lLCBuZXdQYXRoKSB7XG4gICAgcG9seWxpbmUuc2V0UGF0aChuZXdQYXRoKTtcbiAgfVxuXG4gIHJlbW92ZVBvbHlsaW5lKHBvbHlsaW5lKSB7XG4gICAgdGhpcy5tYXAucmVtb3ZlT3ZlcmxheShwb2x5bGluZSk7XG4gIH1cblxuICBhcHBseUNvb3JkaW5hdGVPZmZzZXQoW2xuZywgbGF0XSkge1xuICAgIHJldHVybiBXR1M4NFRvQkQwOUxMKGxuZywgbGF0KTtcbiAgfVxufVxuXG5jbGFzcyBOYXZpZ2F0aW9uQ29udHJvbCBleHRlbmRzIEJNYXAuQ29udHJvbCB7XG4gIGNvbnN0cnVjdG9yKHRleHQsIHRpcCwgY29sb3IsIG9mZnNldCwgb25DbGlja0hhbmRsZXIsIC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmRlZmF1bHRBbmNob3IgPSBCTUFQX0FOQ0hPUl9UT1BfTEVGVDtcbiAgICB0aGlzLmRlZmF1bHRPZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy5vbkNsaWNrSGFuZGxlciA9IG9uQ2xpY2tIYW5kbGVyO1xuICAgIHRoaXMudGl0bGUgPSB0aXA7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgaW5pdGlhbGl6ZShtYXApIHtcbiAgICBjb25zdCBjb250cm9sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBTZXQgQ1NTIGZvciB0aGUgY29udHJvbCBib3JkZXIuXG4gICAgY29uc3QgY29udHJvbFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udHJvbFVJLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuICAgIGNvbnRyb2xVSS5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkICNmZmYnO1xuICAgIGNvbnRyb2xVSS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnM3B4JztcbiAgICBjb250cm9sVUkuc3R5bGUuYm94U2hhZG93ID0gJzAgMnB4IDZweCByZ2JhKDAsMCwwLC4zKSc7XG4gICAgY29udHJvbFVJLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICBjb250cm9sVUkuc3R5bGUubWFyZ2luQm90dG9tID0gJzIycHgnO1xuICAgIGNvbnRyb2xVSS5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBjb250cm9sVUkudGl0bGUgPSB0aGlzLnRpdGxlO1xuICAgIGNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQoY29udHJvbFVJKTtcblxuICAgIC8vIC8vIFNldCBDU1MgZm9yIHRoZSBjb250cm9sIGludGVyaW9yLlxuICAgIGNvbnN0IGNvbnRyb2xUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udHJvbFRleHQuc3R5bGUuY29sb3IgPSAncmdiKDI1LDI1LDI1KSc7XG4gICAgY29udHJvbFRleHQuc3R5bGUuZm9udEZhbWlseSA9ICdSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZic7XG4gICAgY29udHJvbFRleHQuc3R5bGUuZm9udFNpemUgPSAnMTZweCc7XG4gICAgY29udHJvbFRleHQuc3R5bGUubGluZUhlaWdodCA9ICczOHB4JztcbiAgICBjb250cm9sVGV4dC5zdHlsZS5wYWRkaW5nTGVmdCA9ICc1cHgnO1xuICAgIGNvbnRyb2xUZXh0LnN0eWxlLnBhZGRpbmdSaWdodCA9ICc1cHgnO1xuICAgIGNvbnRyb2xUZXh0LmlubmVySFRNTCA9IHRoaXMudGV4dDtcbiAgICBjb250cm9sVUkuYXBwZW5kQ2hpbGQoY29udHJvbFRleHQpO1xuXG4gICAgbWFwLmdldENvbnRhaW5lcigpLmFwcGVuZENoaWxkKGNvbnRyb2xEaXYpO1xuXG4gICAgY29udHJvbFVJLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsaWNrSGFuZGxlcihjb250cm9sVGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udHJvbERpdjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==