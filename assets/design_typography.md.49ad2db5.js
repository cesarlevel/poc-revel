import{_ as n,r as a,o,c as l,b as t,d as e,a as i,e as r}from"./app.51c380a4.js";const d="/poc-revel/assets/typesize.458d34eb.png",c="/poc-revel/assets/baseline.4588d203.png",p="/poc-revel/assets/linelength.2d90858c.png",_=JSON.parse('{"title":"Typography","description":"","frontmatter":{},"headers":[{"level":3,"title":"The foundational component to communicate and organize our information hierarchy.","slug":"the-foundational-component-to-communicate-and-organize-our-information-hierarchy","link":"#the-foundational-component-to-communicate-and-organize-our-information-hierarchy","children":[]},{"level":2,"title":"Font stack","slug":"font-stack","link":"#font-stack","children":[{"level":3,"title":"Sans serif","slug":"sans-serif","link":"#sans-serif","children":[]},{"level":3,"title":"Monospaced","slug":"monospaced","link":"#monospaced","children":[]}]},{"level":2,"title":"Font sizes","slug":"font-sizes","link":"#font-sizes","children":[]},{"level":2,"title":"Baseline","slug":"baseline","link":"#baseline","children":[]},{"level":2,"title":"Line length","slug":"line-length","link":"#line-length","children":[]},{"level":2,"title":"Type styles","slug":"type-styles","link":"#type-styles","children":[{"level":3,"title":"Body styles","slug":"body-styles","link":"#body-styles","children":[]},{"level":3,"title":"Heading styles","slug":"heading-styles","link":"#heading-styles","children":[]}]}],"relativePath":"design/typography.md"}'),h={name:"design/typography.md"},y={id:"typography",tabindex:"-1"},g=t("a",{class:"header-anchor",href:"#typography","aria-hidden":"true"},"#",-1),u=r(`<h3 id="the-foundational-component-to-communicate-and-organize-our-information-hierarchy" tabindex="-1">The foundational component to communicate and organize our information hierarchy. <a class="header-anchor" href="#the-foundational-component-to-communicate-and-organize-our-information-hierarchy" aria-hidden="true">#</a></h3><h2 id="font-stack" tabindex="-1">Font stack <a class="header-anchor" href="#font-stack" aria-hidden="true">#</a></h2><p>The beauty of system fonts is that it matches what the current OS uses and completely eliminates the need to fetch this resource.</p><ul><li><p><strong>-apple-system</strong> targets San Francisco in Safari (on Mac OS X and iOS), and it targets Neue Helvetica and Lucida Grande on older versions of Mac OS X. It properly selects between San Francisco Text and San Francisco Display depending on the text\u2019s size.</p></li><li><p><strong>system-ui</strong> represents the default UI font on a given platform.</p></li><li><p><strong>BlinkMacSystemFont</strong> is the equivalent of Chrome on Mac OS X.</p></li><li><p><strong>Segoe UI</strong> targets Windows and Windows Phones.</p></li><li><p><strong>Roboto</strong> targets Android and newer Chrome OS. It is deliberately listed after Segoe UI so that if you\u2019re an Android developer on Windows and have Roboto installed, Segoe UI will be used instead.</p></li></ul><p><strong>The bottom line: It&#39;s truly the ultimate solution for any website/webapp in any OS.</strong></p><h3 id="sans-serif" tabindex="-1">Sans serif <a class="header-anchor" href="#sans-serif" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">font-family</span><span style="color:#A6ACCD;">: -apple-system</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">system-ui</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">BlinkMacSystemFont</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">&quot;Segoe UI&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Roboto</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">&quot;Helvetica Neue&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Arial</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">sans-serif</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="monospaced" tabindex="-1">Monospaced <a class="header-anchor" href="#monospaced" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">font-family</span><span style="color:#A6ACCD;">: &#39;SFMono-Medium&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> &#39;SF Mono&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> &#39;Segoe UI Mono&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> &#39;Roboto Mono&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> &#39;Ubuntu Mono&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Menlo</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Consolas</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Courier</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> monospace;</span></span>
<span class="line"></span></code></pre></div><h2 id="font-sizes" tabindex="-1">Font sizes <a class="header-anchor" href="#font-sizes" aria-hidden="true">#</a></h2><p>Fonts sizes have a ratio of a minor third (1.2), which means they scale up or down by that ratio then we rounded those numbers to multiples of 4px. Our line height follows the same principle but the used ratio is 1.5 to keep the vertical flow easy to process and harmonious.</p><table><thead><tr><th>Token</th><th style="text-align:center;">Size / Line height (px)</th><th style="text-align:center;">Size / Line height (rem)</th></tr></thead><tbody><tr><td>--r-font-size-5xl</td><td style="text-align:center;">40 / 44</td><td style="text-align:center;">2.5 / 2.75</td></tr><tr><td>--r-font-size-4xl</td><td style="text-align:center;">34 / 40</td><td style="text-align:center;">2.125 / 2.5</td></tr><tr><td>--r-font-size-3xl</td><td style="text-align:center;">28 / 36</td><td style="text-align:center;">1.75 / 2.25</td></tr><tr><td>--r-font-size-2xl</td><td style="text-align:center;">24 / 32</td><td style="text-align:center;">1.5 / 2</td></tr><tr><td>--r-font-size-xl</td><td style="text-align:center;">20 / 28</td><td style="text-align:center;">1.25 / 1.75</td></tr><tr><td>--r-font-size-l</td><td style="text-align:center;">16 / 24</td><td style="text-align:center;">1 / 1.5</td></tr><tr><td>--r-font-size-m</td><td style="text-align:center;">14 / 20</td><td style="text-align:center;">0.875 / 1.25</td></tr><tr><td>--r-font-size-s</td><td style="text-align:center;">12 / 16</td><td style="text-align:center;">0.75 / 1</td></tr></tbody></table><hr><p><img src="`+d+'" alt="Typesize"></p><h2 id="baseline" tabindex="-1">Baseline <a class="header-anchor" href="#baseline" aria-hidden="true">#</a></h2><p>Baseline is the imaginary line where the text &quot;rests&quot;. Aligment with this line is crucial to keep harmony, specially when presenting elements with different height.</p><p><img src="'+c+'" alt="Baseline"></p><h2 id="line-length" tabindex="-1">Line length <a class="header-anchor" href="#line-length" aria-hidden="true">#</a></h2><p>Having the right amount of characters on each line is key to achieve readibility of text. We should always try to aim for an average line of 50 to 90 characters including spaces.</p><p><img src="'+p+'" alt="Line length"></p><h2 id="type-styles" tabindex="-1">Type styles <a class="header-anchor" href="#type-styles" aria-hidden="true">#</a></h2><p>In order to offer a clear hierarchy between text elements Revel uses two styles body and headings.</p><h3 id="body-styles" tabindex="-1">Body styles <a class="header-anchor" href="#body-styles" aria-hidden="true">#</a></h3><p>Referring to the text in the body of our interfaces, this style needs to always have good contrast.</p><h3 id="heading-styles" tabindex="-1">Heading styles <a class="header-anchor" href="#heading-styles" aria-hidden="true">#</a></h3><p>The style that keeps various levels of information hierarchy by utilizing size and weight.</p>',26);function f(m,b,F,D,x,C){const s=a("Badge");return o(),l("div",null,[t("h1",y,[e("Typography "),i(s,{type:"warning",text:"beta"}),e(),g]),u])}const v=n(h,[["render",f]]);export{_ as __pageData,v as default};