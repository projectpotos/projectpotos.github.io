import{_ as r,r as l,o as c,c as d,a as e,b as a,d as n,w as o,e as t}from"./app-htrVjLpi.js";const u={},p=e("h1",{id:"getting-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),a(" Getting Started")],-1),h=e("p",null,"You want to tailor-make your own Linux client for you, your company or someone else? Potos can be your framework.",-1),m=e("p",null,"Here you will find some instructions on how to set up your own Linux client based on Potos. But the best way of getting to know Potos is simply by try it yourself. Don't be scared by the unknown territory 😉",-1),b=e("h2",{id:"specs-repository",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#specs-repository","aria-hidden":"true"},"#"),a(" Specs Repository")],-1),v={href:"https://en.wikipedia.org/wiki/Ansible_(software)",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"The only other source for some very limited parameters is with the iso image generation.",-1),k=e("p",null,[a('You can read everything about this "Specs" repository '),e("a",{href:"/guide/specs-repo/overview"},"here"),a(".")],-1),y=e("h2",{id:"iso-build",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iso-build","aria-hidden":"true"},"#"),a(" Iso Build")],-1),f=e("a",{href:"/guide/iso-build/config"},"config directory",-1),w=t(`<h2 id="sample-client-build-tutorial" tabindex="-1"><a class="header-anchor" href="#sample-client-build-tutorial" aria-hidden="true">#</a> Sample Client build - Tutorial</h2><h3 id="unchanged-potos-vanilla-client" tabindex="-1"><a class="header-anchor" href="#unchanged-potos-vanilla-client" aria-hidden="true">#</a> Unchanged Potos Vanilla Client</h3><ol><li>Ensure you have <code>git</code>, <code>docker</code> and possibility to run a virtual machine (e.g. kvm, virtualbox, vmware, etc) installed</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token parameter variable">--version</span>
<span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Create a local work environment, e.g. <code>~/potosSampleClient</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/potosSampleClient
<span class="token builtin class-name">cd</span> ~/potosSampleClient
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Clone the <code>potos-iso-builder</code> to get the scaffolding and change into this directory</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/projectpotos/potos-iso-builder.git
<span class="token builtin class-name">cd</span> potos-iso-builder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>In further tries at this step you would adjust the files in the <code>config</code>, but for this tutorial we leave everything at default</li><li>Build the image by running<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/config:/config <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/output:/output ghcr.io/projectpotos/potos-iso-builder:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>SELinux may prevent access to <code>config</code> and <code>output</code>. (<code>PermissionError: [Errno 13] Permission denied: &#39;/config/config.yml&#39;</code>.) Add <code>:z</code> to each mapped volume:<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/config:/config:z <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/output:/output:z ghcr.io/projectpotos/potos-iso-builder:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Create a new VM using the iso in the <code>output</code> directory</li><li>Just follow the setup dialog on first boot</li><li>Enjoy a Linux Client based on Ubuntu 22.04 LTS, with a potos wallpaper that is regularly enforced.</li></ol><h3 id="changing-client" tabindex="-1"><a class="header-anchor" href="#changing-client" aria-hidden="true">#</a> Changing client</h3>`,10),_={start:"9"},x={href:"https://github.com/projectpotos/ansible-specs-potos",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"Use this template",-1),S=e("code",null,"Create a new repository",-1),q=t(`<li>Select where you want that repository.</li><li>Adjust in <code>config/config.yml</code> the following values to your new location<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">specs</span><span class="token punctuation">:</span>
  <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://github.com/projectpotos/&quot;</span>
  <span class="token key atrule">repo</span><span class="token punctuation">:</span> <span class="token string">&quot;ansible-specs-potos&quot;</span>
  <span class="token key atrule">branch</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>You may also want to adjust other values in <code>config/config.yml</code> such as <code>client_name</code></li><li>While developing you may want to enable debugging with <code>environment: &quot;develop&quot;</code>, but his may leak confidential informations to the enduser, so ensure to change back before deploying an image.</li><li>Go back to build the image and test your changes. Your &quot;Design - Build - Test - Learn&quot; Cycle has just started 😃</li>`,5),j=e("li",null,"For more information, have a look at the following resources",-1),E=e("h2",{id:"custom-role-development-example-tutorial",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#custom-role-development-example-tutorial","aria-hidden":"true"},"#"),a(" Custom role - Development Example - Tutorial")],-1),L=t(`<h3 id="role-development-environment" tabindex="-1"><a class="header-anchor" href="#role-development-environment" aria-hidden="true">#</a> Role Development Environment</h3><ol><li>Have a Linux Client running, on where you can write some Ansible but also directly run and apply the changes. If you don&#39;t have your own client yet, we recommend the Vanilla Client from above.</li><li>Create yourself a working directory <code>mkdir ~/potos-development</code> to working <code>cd ~/potos-development</code></li><li>Create a directory for roles in that dir <code>mkdir roles</code></li><li>Clone the role template <code>git clone https://github.com/projectpotos/ansible-role-potos_template roles/my_role</code></li><li>Create a short playbook <code>test.yml</code> (you can add/remove roles you want to test at the end)</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Test Role playboo
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> yes
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">potos_variables_you_want_set</span><span class="token punctuation">:</span> <span class="token string">&quot;potos&quot;</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run roles
      <span class="token key atrule">ansible.builtin.include_role</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ item }}&quot;</span>
      <span class="token key atrule">loop</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> my_role
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>Now you can edit, test and run the role with <code>ansible-playbook test.yml</code> or to get more verbose <code>ansible-playbook test,yml --diff -vv</code></li></ol><h3 id="minimal-role-full-role" tabindex="-1"><a class="header-anchor" href="#minimal-role-full-role" aria-hidden="true">#</a> Minimal Role &gt;&gt;&gt; Full Role</h3><ol start="7"><li>Write the Ansible task that should happen to <code>tasks/main.yml</code>.</li></ol><ul><li>If you want/need to parameterize anything you can use <code>defaults/main.yml</code></li><li>For templates just use the <code>templates</code> directory</li><li>When you need files withoutu templating, you may create a directory <code>files</code> and store the files in there</li></ul><ol start="8"><li>Once your role works, adjust all the files around it:</li></ol><ul><li><code>README.md</code></li><li><code>CODEOWNERS.md</code></li><li><code>meta/main.yml</code></li><li><code>meta/argument_specs.yml</code></li></ul>`,9),R={start:"9"};function A(T,B){const i=l("ExternalLinkIcon"),s=l("RouterLink");return c(),d("div",null,[p,h,m,b,e("p",null,[a('For your custom client you need your own "Specs" Repository. This repository defines all the basics of how your client will look. It defines what '),e("a",v,[a("Ansible"),n(i)]),a(" roles should be applied, in what frequence, and with what variables.")]),g,k,y,e("p",null,[a("For the iso generation, the main thing you need is a "),f,a(" with a "),n(s,{to:"/guide/iso-build/config.html#config-yml"},{default:o(()=>[a("config.yml")]),_:1}),a(' file. This file defines the most basic things for the iso, such as how the client should be named or where to look for the "Specs Repository".')]),w,e("ol",_,[e("li",null,[a("As a next step you probably want your own Specs Repository for this you need "),e("ol",null,[e("li",null,[a("Go to "),e("a",x,[a("github.com/projectpotos/ansible-specs-potos"),n(i)]),a(" and click on "),C,a(" > "),S,a(" to create your own specs repository.")]),q])]),j]),e("ul",null,[e("li",null,[n(s,{to:"/guide/iso-build/config.html"},{default:o(()=>[a("Iso Build Config")]),_:1})]),e("li",null,[n(s,{to:"/guide/specs-repo/overview.html"},{default:o(()=>[a("All about the Specs repo")]),_:1})]),e("li",null,[n(s,{to:"/guide/own-role/"},{default:o(()=>[a("Write your own role")]),_:1})])]),E,e("p",null,[a("Due to the nature of such Linux clients, Potos has a lot of different parts that need to work together. So we recommend you read the different parts of "),n(s,{to:"/guide/own-role/"},{default:o(()=>[a("Write your own role")]),_:1}),a(". How ever this quick tutorial should help you getting started with a custom role.")]),L,e("ol",R,[e("li",null,[a("Write testing for the role with Molecule: see "),n(s,{to:"/guide/own-role/molecule.html"},{default:o(()=>[a("here")]),_:1})])])])}const D=r(u,[["render",A],["__file","index.html.vue"]]);export{D as default};
