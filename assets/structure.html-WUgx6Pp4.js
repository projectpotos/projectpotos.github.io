import{_ as l,r as o,o as r,c as p,a as e,b as s,d as n,w as c,e as t}from"./app-htrVjLpi.js";const d={},u=e("h1",{id:"structure",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#structure","aria-hidden":"true"},"#"),s(" Structure")],-1),h={href:"https://github.com/projectpotos/ansible-role-potos_wallpaper",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"potos_wallpaper",-1),b=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible-specs-potos
│   README.md
│   requirements.txt
│
└───files
│   └───potos_wallpaper
│   │   │   potos-vanilla.jpg
│   │
│   └───templates
│       │   requirements.yml.j2
└───molecule
│   └───default
│       │ converge.yml
│       │ molecule.yml
│       │ prepare.yml
│       │ verify.yml
│
└───templates
│   │   collections.yml.j2
│
└───vars
    │   potos_wallpaper.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="readme-md" tabindex="-1"><a class="header-anchor" href="#readme-md" aria-hidden="true">#</a> README.md</h2><p>The README is just a normal git repository readme file, with no special function besides informing a viewer about the repos purpose.</p><h2 id="requirements-txt" tabindex="-1"><a class="header-anchor" href="#requirements-txt" aria-hidden="true">#</a> requirements.txt</h2><p>The requirements.txt file defines the requirements to be loaded for the molecule testing (see <a href="#molecule"># molecule</a>)</p><h2 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> files/</h2>`,6),v=e("h2",{id:"files-potos-wallpaper",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#files-potos-wallpaper","aria-hidden":"true"},"#"),s(" files/potos_wallpaper")],-1),k={href:"https://github.com/projectpotos/ansible-role-potos_wallpaper",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"potos_wallpaper",-1),_=e("h2",{id:"files-templates",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#files-templates","aria-hidden":"true"},"#"),s(" files/templates")],-1),f=e("p",null,"This is a special directory as files within this directory are available as templates to the playbook execution.",-1),g=e("h2",{id:"files-template-requirements-yml-j2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#files-template-requirements-yml-j2","aria-hidden":"true"},"#"),s(" files/template/requirements.yml.j2")],-1),x={href:"https://galaxy.ansible.com/",target:"_blank",rel:"noopener noreferrer"},w=e("a",{href:"#ssh-deploy-key"},"here",-1),j=t(`<p>As an example</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">{</span>% if potos_runtype == &#39;setup&#39; %<span class="token punctuation">}</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> firstboot
  <span class="token key atrule">src</span><span class="token punctuation">:</span> git+https<span class="token punctuation">:</span>//github.com/projectpotos/ansible<span class="token punctuation">-</span>role<span class="token punctuation">-</span>potos_firstboot
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;main&#39;</span>
<span class="token punctuation">{</span>% endif %<span class="token punctuation">}</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> basics
  <span class="token key atrule">src</span><span class="token punctuation">:</span> git+https<span class="token punctuation">:</span>//github.com/projectpotos/ansible<span class="token punctuation">-</span>role<span class="token punctuation">-</span>potos_basics.git
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;main&#39;</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> wallpaper
  <span class="token key atrule">src</span><span class="token punctuation">:</span> git+https<span class="token punctuation">:</span>//github.com/projectpotos/ansible<span class="token punctuation">-</span>role<span class="token punctuation">-</span>potos_wallpaper.git
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;main&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),q={href:"https://github.com/projectpotos/ansible-role-potos_firstboot",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"potos_firstboot",-1),T=e("code",null,"setup",-1),A={href:"https://github.com/projectpotos/ansible-role-potos_basics.git",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"potos_basics",-1),M={href:"https://github.com/projectpotos/ansible-role-potos_wallpaper.git",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"potos_wallpaper",-1),P=t(`<h3 id="ssh-deploy-key" tabindex="-1"><a class="header-anchor" href="#ssh-deploy-key" aria-hidden="true">#</a> SSH Deploy key</h3><p>If you want to include private repos that need a deploy key, for one you can define it the following way</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> secret
  <span class="token key atrule">src</span><span class="token punctuation">:</span> git+git@github.com<span class="token punctuation">:</span>projectpotos/ansible<span class="token punctuation">-</span>role<span class="token punctuation">-</span>potos_secret.git
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;main&#39;</span>
  <span class="token key atrule">key_file</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ playbook_dir }}/potos_secret.rsa&quot;</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> topsecret
  <span class="token key atrule">src</span><span class="token punctuation">:</span> git@github.com<span class="token punctuation">:</span>projectpotos/ansible<span class="token punctuation">-</span>role<span class="token punctuation">-</span>potos_topsecret.git
  <span class="token key atrule">scm</span><span class="token punctuation">:</span> git
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;main&#39;</span>
  <span class="token key atrule">key_file</span><span class="token punctuation">:</span> <span class="token string">&quot;/etc/potos/topsecret.rsa&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For the first example you need to place the private deployment key in the specs repository under <code>/files/potos_secret.rsa</code>. For the second one, you need to ensure that the private key is available under the given absolute path.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The <code>key_file</code> path needs to be absolute and the key_file must have no more permissions than 0600, as else it will not be accepted as private key from openssl</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Dependent on your environment, you may want to reuse the deployment key of your specs repo. If so, set <code>key_file: /etc/potos/specs_key</code></p></div><h2 id="molecule" tabindex="-1"><a class="header-anchor" href="#molecule" aria-hidden="true">#</a> molecule/</h2><p>This directory contains the Molecule testing. In the case of the example spec repository, we basically deploy a potos client onto a container.</p><p>For more infos on Molecule see the Molecule testing in <a href="/guide/own-role/molecule">writing your own role</a></p><h2 id="templates" tabindex="-1"><a class="header-anchor" href="#templates" aria-hidden="true">#</a> templates/</h2><p>This directory is basically the same as <a href="#files"><code>files</code></a>, but with the difference that already when copying the files to the playbook location they are getting templated.</p><h2 id="templates-collections-yml-j2" tabindex="-1"><a class="header-anchor" href="#templates-collections-yml-j2" aria-hidden="true">#</a> templates/collections.yml.j2</h2>`,12),R={href:"https://docs.ansible.com/ansible/latest/collections_guide/index.html",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"ansible.posix",-1),L=e("code",null,"community.general",-1),S=e("h2",{id:"vars",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vars","aria-hidden":"true"},"#"),s(" vars/")],-1),V=e("p",null,"In this directory you can place yaml files to override role variables and customize them for your client. All the files in this directory are available as host_vars during the Potos playbook execution.",-1),B=e("h2",{id:"vars-potos-wallpaper-yml",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vars-potos-wallpaper-yml","aria-hidden":"true"},"#"),s(" vars/potos_wallpaper.yml")],-1),F={href:"https://github.com/projectpotos/ansible-role-potos_wallpaper",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"potos_wallpaper",-1);function H(z,G){const a=o("ExternalLinkIcon"),i=o("RouterLink");return r(),p("div",null,[u,e("p",null,[s("A minimal structure example for a client with the "),e("a",h,[m,n(a)]),s(" role, to have something to explain:")]),b,e("p",null,[s("All files from within this directory are straight copied into the "),n(i,{to:"/guide/own-role/potos_playbook.html"},{default:c(()=>[s("Potos Playbook")]),_:1}),s(" directory.")]),v,e("p",null,[s("This directory is specific to the "),e("a",k,[y,n(a)]),s(" role. In this case it contains the background images to be deployed to the clients.")]),_,f,g,e("p",null,[s("This is a mandatory file for all Potos clients, as this file defines what role should be executed at which point in time. It is basically just a "),e("a",x,[s("ansible-galaxy"),n(a)]),s(" requirements file getting templated specifically for this playbook run. Although we extended it a little bit, to support more options for git via ssh, see "),w,s(".")]),j,e("p",null,[s("Here the "),e("a",q,[I,n(a)]),s(" role is executed just when the runtype is set as "),T,s(". In this case this means it is only executed once during the setup process.")]),e("p",null,[s("The roles "),e("a",A,[E,n(a)]),s(" and "),e("a",M,[N,n(a)]),s(" are then executed each time.")]),P,e("p",null,[s("This is a mandatory file for all Potos clients, as this file defines what additional "),e("a",R,[s("collections"),n(a)]),s(" should be installed before the playbook execution, to run all roles. In most cases at some point you will probably need to add "),D,s(" and "),L,s(" as they are widely used.")]),S,V,B,e("p",null,[s("This file is specific to the "),e("a",F,[C,n(a)]),s(" role. It overwrites the variables from this role for this client.")])])}const J=l(d,[["render",H],["__file","structure.html.vue"]]);export{J as default};
