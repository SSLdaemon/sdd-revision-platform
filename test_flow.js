const html = `Consider the following flowchart fragment:

[START] --&gt; [Set Counter = 1] --&gt; [DECISION: Counter &lt;= 10?]
  YES --&gt; [Process] --&gt; [Counter = Counter + 1] --&gt; [back to DECISION]
  NO --&gt; [END]

Which set of pseudocode keywords matches this flowchart?`;

function renderFlowLines(lines){
  let html = '<div class="flow-container">';
  for(const line of lines){
    html += '<div class="flow-row">';
    const segs = line.split(/\s*--&gt;\s*/);
    for(let i=0; i<segs.length; i++){
      let seg = segs[i].trim();
      if(!seg) continue;
      if(i > 0) html += '<span class="flow-arrow">→</span>';
      let label = '';
      const lm = seg.match(/^(YES|NO)\s+/);
      if(lm){ label = lm[1]; seg = seg.substring(lm[0].length); }
      if(label) html += '<span class="flow-label '+label.toLowerCase()+'">'+label+'</span><span class="flow-arrow">→</span>';
      const nodeRe = /\[([^\]]+)\]/g;
      let nm, lastI=0, parsed=false;
      while((nm = nodeRe.exec(seg)) !== null){
        const before = seg.substring(lastI, nm.index).trim();
        if(before && /^(YES|NO)$/.test(before)){
          html += '<span class="flow-label '+before.toLowerCase()+'">'+before+'</span><span class="flow-arrow">→</span>';
        }
        const c = nm[1];
        let cls='flow-process', disp=c;
        if(/^START$/i.test(c)) cls='flow-start';
        else if(/^END$/i.test(c)) cls='flow-end';
        else if(/^DECISION:/i.test(c)){ cls='flow-decision'; disp=c.replace(/^DECISION:\s*/i,''); }
        else if(/^back to/i.test(c)){ disp='↺ '+c.replace(/^back to\s*/i,''); }
        else if(/^Continue$/i.test(c)) cls='flow-end';
        html += '<span class="flow-node '+cls+'">'+disp+'</span>';
        lastI = nm.index + nm[0].length; parsed = true;
      }
      if(!parsed){
        if(/^(YES|NO)$/.test(seg)){
          html += '<span class="flow-label '+seg.toLowerCase()+'">'+seg+'</span>';
        } else if(seg.match(/^(All paths|Both paths)/i)){
          html += '<span style="color:var(--text-dim);font-size:.8rem;font-style:italic">'+seg+'</span>';
        }
      }
    }
    html += '</div>';
  }
  html += '</div>';
  return html;
}

function formatFlowchartText(html){
  const lines = html.split('\n');
  let result = [];
  let flowLines = [];
  let collecting = false;
  for(let line of lines){
    const trimmed = line.trim();
    const hasNodes = /\[.+?\]/.test(trimmed);
    const hasArrows = trimmed.includes('--&gt;');
    const isBranch = /^(YES|NO|All paths|Both paths)/i.test(trimmed);
    if(hasNodes && (hasArrows || isBranch)){
      if(!collecting) collecting = true;
      flowLines.push(trimmed);
    } else {
      if(collecting){
        result.push(renderFlowLines(flowLines));
        flowLines = []; collecting = false;
      }
      result.push(line);
    }
  }
  if(collecting && flowLines.length) result.push(renderFlowLines(flowLines));
  return result.join('\n');
}

console.log(formatFlowchartText(html));
