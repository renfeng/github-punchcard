[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/renfeng/github-punchcard)

## &lt;github-punchcard&gt;

`<github-punchcard>` displays a punchcard graph for a github repository.

* Introduction, https://github.com/blog/1093-introducing-the-new-github-graphs
* Examples, https://issarice.com/github-punch-card-exploration

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="github-punchcard.html">
    <link rel="import" href="../paper-toast/paper-toast.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<github-punchcard user="polymer" repo="polymer"></github-punchcard>
<paper-toast id="toast" duration="Infinity"></paper-toast>
<script>
	var punchcard = document.querySelector("github-punchcard");
	var toast = document.querySelector("paper-toast");
	punchcard.addEventListener("toast", function (e) {
		if (e.detail) {
			toast.text = e.detail.text;
			toast.open();
		} else {
			toast.close();
		}
	});
</script>
```

> Punch Card plot is quite useful in case to support the scrum meetings planning. Because you can plan them when developers in team are not so productive. - https://coderwall.com/p/lxygqq/git-punch-card-plot-in-your-own-repo

> What I love about the punch cards is that they're both informative and motivational. They give me a better understanding of how I work and how my effort relates to that of other open source developers. When I'm focused on a goal like getting the next version out the door, I occasionally forget what I went through to get there. The punch cards help me remember. - http://solutious.com/blog/2009/05/06/github-punchcards/