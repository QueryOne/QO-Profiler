
Profiler = (function(Profiler) {
  let className = "Profiler"
  let rules =  {
  ['Profiler']: `
    position: absolute;
    left: 50%;
    top : 50%;
    transform: translate( -50%, -50% );
    width : 610px;
    height: 410px;
    background: rgba( 44, 44, 44, 0.89 );
    background-image: url('./core/resources/raster.png');
    z-index: 140;
    border-radius: 7px;
    border: 1px solid rgba( 14, 14, 14, 1.00 );
  `,
  ['Profiler-header']: `
    width: 100%;
    height: 28px;
    top   : 0%;
    left  : 0%;
    background: rgba( 211, 211, 211, 0.06 );
    text-align: center;
    line-height: 30px;
    font-family: 'Nanum Gothic','Noto Sans','Lekton';
    color : rgba( 255, 255, 255, 0.25 );
    user-select: none;
  `,
  ['Profiler-closer']: `
    position: absolute;
    right   : 0%;
    top     : 0%;
    width   : 28px;
    height  : 28px;
    line-height: 30px;
    text-align: center;
    font-family: 'Lekton';
    cursor: pointer;
    color : rgba( 143, 25, 25, 1.00 );
  `,
  ['Profiler-closer:hover']: `
    background: rgba( 189, 14, 14, 0.11 );
    color     : rgba( 221, 25, 25, 1.00 );
  `,
  ['Profiler-left']: `
    position : absolute;
    left      : 0%;
    top       : calc(0% + 28px);
    width     : calc(33% - 1px);
    height    : calc(100% - 28px);
    border-right: 1px solid rgba( 111, 111, 111, 0.11 );
  `
  }
  
  let inject = function(rule) {
    $('body').append('<div class="' + className + '">&shy;<style>' + rule + '</style></div>')
  }
  
  let css = function(rules) {
    if ($('.' + className).length) { $('.' + className).remove() }
    let output = ''
    for (var rule in rules) {
      if (rule.match(/^\./)) {
        output += rule.replace(/^./,'.QO-') + ' {' + rules[rule] + '}\n'
      } else {
        output += '#QO-' + rule + ' {' + rules[rule] + '}\n'
      }
    }
    inject(output)
    
  }
  
  let draw = function() {
    $('#QO-Profiler').remove()
    
    let d = ''
    d += '<div id="QO-Profiler">'
    d +=  '<div id="QO-Profiler-header">Profiles</div>'
    d +=  '<div id="QO-Profiler-closer" onclick="Profiler.close()">x</div>'
    d +=  '<div id="QO-Profiler-left"></div>'
    d +=  '<div id="QO-Profiler-right"></div>'
    d += '</div>'
    $('#container').append(d)
    
    Profiler.close()
    
    let x = window.innerWidth
    let y = window.innerHeight
    let v = '0 0 ' + x + ' ' + y
    
    d  = ''
    d += '<div class="QO-Titular">'
    d += '<svg viewBox="' + v + '" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
    d += '<g stroke="none" fill="" fill-rule="evenodd" fill-opacity="0">'
    d += '<text id="" stroke="rgba(225,225,225,0.88)" font-family="Cinzel" font-size="55">'
    d += '<tspan x="' + (0.57 * x) + '" y="' + 0.5 * y + '">'
    d +=   '<tspan>Q</tspan>'
    d +=   '<tspan>u</tspan>'
    d +=   '<tspan>e</tspan>'
    d +=   '<tspan>r</tspan>'
    d +=   '<tspan>y</tspan>'
    d +=   '<tspan>O</tspan>'
    d +=   '<tspan>n</tspan>'
    d +=   '<tspan>e</tspan>'
    d += '</tspan>'
    d += '</text></g></svg></div>'
    
    // Akaya Telivigala
    $('#container').append(d)
  }

  let close = function() {
    $('#QO-Profiler').remove()
  }

  Profiler.close    = close
  Profiler.css      = css
  Profiler.cssRules = rules
  Profiler.draw     = draw
  return Profiler
})(typeof Profiler != 'undefined' ? Profiler : {})

// Test-kit
Profiler.css(Profiler.cssRules)
Profiler.draw()
