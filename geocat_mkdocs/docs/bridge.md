# GeoCat Bridge

## Bridge 3

```title="Keyboard keys"
++ctrl+alt+del++
```

Keyboard keys are styled according to their operating system

=== "Windows"

    ++ctrl+alt+del++

=== "Mac"

    ++cmd+option+del++

=== "Linux"

    ++ctrl+w++

    or ++shift+w+enter++

Use the ++arrow-up++ and ++arrow-down++ to navigate

<small>**Tip:** Enter some keywords to find icons and emojis and click on the
shortcode to copy it to your clipboard.</small>

### Code example

``` css hl_lines="5 6 7 8" linenums="1"
body {
  font-size: var(--gc-font-size-default);
  background-color: var(--gc-background-color-body);
}
h1, h2, h3, h4, h5, h6 {
   font-weight: 400;
   height: auto;
}
h1 {
  font-size: 32px;
  font-weight: 700; /* (1)! */
}
h2 {
  padding-bottom: .3rem;
  border-bottom: 1px solid var(--gc-border-color);
}
h4 {
  font-size: 110%;
  text-decoration: underline;
}
p {
  margin-bottom: var(--gc-spacing-default);
}
a {
  color: var(--gc-link-color);
  text-decoration: underline;
}
a:hover, a:focus, a:visited {
  color: var(--gc-link-color);
  filter: brightness(var(--gc-hover-brightness));
}
```

1.  I'm a code annotation! I can contain `code`, __formatted
    text__, images, ... basically anything that can be written in Markdown.


### Tabbed code block

=== "CSS"

    ``` css 
    /* CSS code block */
    body {
      font-size: var(--gc-font-size-default);
      background-color: var(--gc-background-color-body);
    }
    h1, h2, h3, h4, h5, h6 {
       font-weight: 400;
       height: auto;
    }
    h1 {
      font-size: 32px;
      font-weight: 700;
    }
    h2 {
      padding-bottom: .3rem;
      border-bottom: 1px solid var(--gc-border-color);
    }
    h4 {
      font-size: 110%;
      text-decoration: underline;
    }
    p {
      margin-bottom: var(--gc-spacing-default);
    }
    ```

=== "LESS"
    
    ``` less 
    /* LESS Code */

    /* Less is more */
    body {
      font-size: var(--gc-font-size-default);
      background-color: var(--gc-background-color-body);
    }
    h1, h2, h3, h4, h5, h6 {
       font-weight: 400;
       height: auto;
    }
    h1 {
      font-size: 32px;
      font-weight: 700;
    }
    h2 {
      padding-bottom: .3rem;
      border-bottom: 1px solid var(--gc-border-color);
    }
    h4 {
      font-size: 110%;
      text-decoration: underline;
    }
    p {
      margin-bottom: var(--gc-spacing-default);
    }
    ```

### Admonitions

???+ example

    This admonition is open by default

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

??? note

    This one is closed by default

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

More types of admonition: [https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types)

## Bridge 2

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.
Lorem ipsum dolor sit amet, n consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.