module.exports = {
    data: {
        available: false,
        isPermalinkPage: false,
        blog: {},
        posts: []
    },
    title: function (post) {
        if (this.data.available) {
            if (post) {
                return post.title;
            } else {
                return this.data.blog.title;
            }
        } else {
            return '{Title}';
        }
    },
    description: function () {
        if (this.data.available) {
            return this.data.blog.description;
        } else {
            return '{Description}';
        }
    },
    blogurl: function () {
        if (this.data.available) {
            return this.data.blog.url;
        } else {
            return '{BlogURL}';
        }
    },
    permalink: function (post) {
        if (this.data.available) {
            if (post) {
                return post.post_url;
            } else {
                return '';
            }
        } else {
            return '{Permalink}';
        }
    },
    photoURL500: function (photo) {
        if (this.data.available) {
            if (photo) {
                return photo.alt_sizes[1].url;
            } else {
                return '';
            }
        } else {
            return '{PhotoURL-500}';
        }
    }
};
