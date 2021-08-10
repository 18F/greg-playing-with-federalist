# Playing With Federalist

I was inspired by @hbillings to try deploying some non-Jekyll-, non-Hugo-
generated content to [Federalist](https://federalist.18f.gov) after she told me
that it can be configured to use Node.js as the builder. After poking around in
the documentation, I was delighted to find out how easy it is: Federalist will
publish anything in the `_site` directory as static content. You can use
anything to build your site! Federalist doesn't care! It just provides Jekyll
and Hugo as a convenience!

## First test

As a first test, [this repo](119481f) contained a simple npm script and no
dependencies. The script created the `_site` directory and wrote some text into
an `index.html` file there. Bam, Federalist published it. So nice!

One important lesson I learned: you ***must*** have a `package-lock.json` file
because Federalist uses the `npm ci` command instead of `npm install`. So... be
aware of that.

## Gatsby

As a second test (not that it was really needed), I added
[Gatsby](gatsbyjs.com), and then updated the [npm script](e2d7afa) to perform a
Gatsby build and then move the output to the `_site` directory. I was not
surprised, but still pleased, that Federalist was happy to pick up my files and
publish them. Cheers, Gatsby on Federalist!

Now that I've shown myself how to do this, I'll archive this repo because it's
just taking up space otherwise. But now we both know what it was for, and that
makes this README worthwhile.
