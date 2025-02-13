(()=>{const t=document.querySelectorAll(".gp-optimize-container");console.log("Starting Optimize"),t.forEach((t=>{if("true"===t.dataset.status&&void 0!==t.dataset.optimizationId){const e=t.querySelectorAll(".gp-optimize-variant"),a=((t,e)=>{const a=localStorage.getItem("gp-optimize-"+t);if(void 0!==a)for(const t of e)if(t.dataset.variantId===a)return console.log("Found stored variant ID: ",a),a;const n=[];for(const t of e){let e=parseInt(t.dataset.targetPercentage);isNaN(e)&&(e=50),n.push({variantId:t.dataset.variantId,weight:e})}console.log("Weighted random data: ",n);const i=(t=>{const e=t.reduce(((t,e,a)=>{var n;return t.push(e.weight+(null!==(n=t[a-1])&&void 0!==n?n:0)),t}),[]),a=Math.random()*e.at(-1);return t[e.findIndex((t=>t>a))]})(n);return localStorage.setItem("gp-optimize-"+t,i.variantId),console.log("Selected winning variant: ",i.variantId),i.variantId})(t.dataset.optimizationId,e);let n;console.log("Winning variant for Optimization "+t.dataset.optimizationId+" is "+a);for(const t of e)t.dataset.variantId===a?(t.style.display="block",n=t):t.style.display="none";"undefined"!=typeof Planet4GpchPluginOptimizeSettings&&("mixpanel"===Planet4GpchPluginOptimizeSettings.event_type?void 0!==window.mixpanel&&(console.log("Sending event to Mixpanel"),window.mixpanel.track("$experiment_started",{"Experiment name":t.dataset.optimizationName,"Variant name":n.dataset.variantName})):"datalayer"===Planet4GpchPluginOptimizeSettings.event_type&&(window.dataLayer=window.dataLayer||[],console.log("Sending event to DataLayer"),window.dataLayer.push({event:Planet4GpchPluginOptimizeSettings.datalayer_event_name,experiment_name:t.dataset.optimizationName,variant_name:n.dataset.variantName})))}}))})();