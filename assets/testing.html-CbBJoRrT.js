import{_ as n,o as s,c as a,e}from"./app-IOn6Q2F5.js";const t={},l=e(`<h1 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h1><p>To really test your role, we recommend to create a new branch in your spec repo and create an iso referencing that branch.</p><p>For early development of your Ansible role, you might simply checkout your role into the correct directory and create a small <code>test.yml</code> playbook to call with <code>ansible-playbook test.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Potos test playbook
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">connection</span><span class="token punctuation">:</span> local
  <span class="token key atrule">become</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
  <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">False</span>

  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token comment"># define default run type</span>
    <span class="token key atrule">potos_runtype</span><span class="token punctuation">:</span> <span class="token string">&#39;daily&#39;</span>

  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run all the required roles
      <span class="token key atrule">ansible.builtin.include_role</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;{{ potos_playbook_role }}&#39;</span>
        <span class="token key atrule">apply</span><span class="token punctuation">:</span>
          <span class="token key atrule">tags</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> always
      <span class="token key atrule">loop</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> your_role_to_test
      <span class="token key atrule">loop_control</span><span class="token punctuation">:</span>
        <span class="token key atrule">loop_var</span><span class="token punctuation">:</span> <span class="token string">&#39;potos_playbook_role&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[l];function p(i,c){return s(),a("div",null,o)}const u=n(t,[["render",p],["__file","testing.html.vue"]]);export{u as default};
