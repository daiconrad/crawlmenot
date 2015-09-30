# crawlmenot

Want to include email addresses and mailto links in a web page
without worrying about being having your page crawled by spammers
who will collect your email address and bombard you with spam?

# Crawl-Me-Not!

Just include the **crawlmenot** Javascript file on the page
along with [jQuery](http://jquery.com/) and by marking up the
anchor with the *is-email* class and some data attributes,
you can create a mailto link:

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
