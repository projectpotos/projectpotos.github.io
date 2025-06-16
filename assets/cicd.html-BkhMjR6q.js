import{_ as t,r as i,o as l,c as o,a as s,b as n,d as a,e as c}from"./app-IOn6Q2F5.js";const p={},u=c(`<h1 id="ci-cd" tabindex="-1"><a class="header-anchor" href="#ci-cd" aria-hidden="true">#</a> CI / CD</h1><p>To ensure certain qualities in our Ansible roles, we use automated testing with Github Actions.</p><h2 id="automated-molecule-tests" tabindex="-1"><a class="header-anchor" href="#automated-molecule-tests" aria-hidden="true">#</a> Automated Molecule tests</h2><p>We want to ensure the defined <a href="./molecule">Molecule tests</a> always succeed and we follow the yaml/ansible lint for a consistent code quality, so we have the following Github Workflow:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>

<span class="token key atrule">name</span><span class="token punctuation">:</span> Molecule tests and ansible linting

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">20.04</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout repository
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Python 3
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>python@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">python-version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.x&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          python -m pip install --upgrade pip
          python -m pip install -r requirements.txt</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Lint with ansible<span class="token punctuation">-</span>lint including yamllint
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          ansible-lint</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Test with molecule
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          molecule test</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commit-message-linting" tabindex="-1"><a class="header-anchor" href="#commit-message-linting" aria-hidden="true">#</a> Commit message linting</h2>`,6),r={href:"https://www.conventionalcommits.org",target:"_blank",rel:"noopener noreferrer"},d=s("h2",{id:"semantic-versioning",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#semantic-versioning","aria-hidden":"true"},"#"),n(" Semantic versioning")],-1),m={href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"x.y.z",-1),k=s("code",null,"x.y",-1),h=s("code",null,"x",-1);function b(y,g){const e=i("ExternalLinkIcon");return l(),o("div",null,[u,s("p",null,[n("We are committed to using only "),s("a",r,[n("Conventional Commits"),a(e)]),n(" messages. Thus we have a linter installed, rejecting any commits which are not following this standard.")]),d,s("p",null,[n("To allow referencing specific versions of an Ansible role in the Specs Repository, each merged PR into the main branch releases a new version according to the "),s("a",m,[n("Semantic versioning"),a(e)]),n(" convention. We do not release the new version "),v,n(" but also update the tags to "),k,n(" and "),h,n(", to allow for a more relaxed version definition.")])])}const f=t(p,[["render",b],["__file","cicd.html.vue"]]);export{f as default};
