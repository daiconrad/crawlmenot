# crawlmenot

Want to include email addresses and mailto links in a web page
without worrying about being having your page crawled by spammers
who will collect your email address and bombard you with spam?

# Crawl-Me-Not!

Just include the **crawlmenot** Javascript file on the page
along with [jQuery](http://jquery.com/) and by marking up the
anchor with the *is-email* class and some data attributes,
you can create a mailto link:

    &lt;a href="#" class="is-email" data-mailbox="crawly" data-domain="example.com"&gt;contact me&lt;/a&gt;

Once the page loads, this will be transformed into:

    &lt;a href="mailto:crawly@example.com" class="is-email" data-mailbox="crawly" data-domain="example.com"&gt;contact me&lt;/a&gt;

Or, if you want to embed the text of the email address in the page,
put a *has-email* class on a container and then *fill-in-email* class
on any element whose text you want replaced with the email address:

    &lt;p class="has-email" data-mailbox="crawly" data-domain="example.com"&gt;
        You can contact me at &lt;span class="fill-in-email"&gt;crawly AT example DOT com&lt;/span&gt;
    &lt;/p&gt;

WARNING: Anything you put inside a *fill-in-email* element will be replaced with the email address.
It doesn't matter what is in there to begin with. The example above would be transformed to:

    &lt;p class="has-email" data-mailbox="crawly" data-domain="example.com"&gt;
        You can contact me at &lt;span class="fill-in-email"&gt;crawly@example.com&lt;/span&gt;
    &lt;/p&gt;
