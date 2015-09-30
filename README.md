# crawlmenot

Want to include email addresses and mailto links in a web page
without worrying about being having your page crawled by spammers
who will collect your email address and bombard you with spam?

# Crawl-Me-Not!

Just include **crawlmenot** and by marking up the anchor tag
with the *is-email* class and some data attributes, you can
create a mailto link:

    <a href="#" class="is-email"
        data-mailbox="crawly" data-domain="example.com">contact me</a>

Once the page loads, this will be transformed into:

    <a href="mailto:crawly@example.com" class="is-email"
        data-mailbox="crawly" data-domain="example.com">contact me</a>

Or, if you want to embed the text of the email address in the page,
put a *has-email* class on a container and then *fill-in-email* class
on any element whose text you want replaced with the email address:

    <p class="has-email" data-mailbox="crawly" data-domain="example.com">
        You can contact me at <span class="fill-in-email">crawly AT example DOT com</span>
    </p>

WARNING: Anything you put inside a *fill-in-email* element will be replaced with the email address.
It doesn't matter what is in there to begin with. The example above would be transformed to:

    <p class="has-email" data-mailbox="crawly" data-domain="example.com">
        You can contact me at <span class="fill-in-email">crawly@example.com</span>
    </p>

## Vanilla JS or jQuery

There are two editions of the **crawlmenot** Javascript file; one that
requires [jQuery](http://jquery.com/) and one that is plain vanilla JS.
The jQuery edition, named **crawlmenot-jq.js**, should work on any
browser, if you're using jQuery 1.x. The plain vanilla Javascript
edition, named **crawlmenot.js** (note absense of '-jq') uses the
[querySelectorAll](http://caniuse.com/#feat=queryselector) API which
means it will not work on versions of Internet Explorer earlier than
IE 8, but if you're not targeting IE 7 or IE 6 and not already using
jQuery, this edition doesn't require you to add jQuery to a page just
to use **crawlmenot**.
