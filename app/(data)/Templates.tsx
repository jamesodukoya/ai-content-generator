// Fix icon URLs
export default [
    {
        name: 'Blog Title',
        decr: 'An AI tool that generates optimized blog titles based on your query.',
        category: 'Blog',
        icon: '/blog-title.png',
        aiPrompt: 'Suggest 5 blog titles in a bulleted list format based on the specified niche topic and outline. Show the results in Rich text editor format.',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Content',
        decr: 'An AI tool that serves as your personal blog writer. All you need to do is enter your specific query.',
        category: 'Blog',
        icon: '/blog-content.png',
        aiPrompt: 'Generate blog content based on the specified blog title, niche topic, and outline. Show the results in Rich text editor format.',
        slug: 'generate-blog-content',
        form: [
            {
                label: 'Enter optimized blog title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        decr: 'An AI tool that generates blog topic ideas based on your query.',
        category: 'Blog',
        icon: '/blog-topic-ideas.png',
        aiPrompt: 'Suggest 5 blog topic ideas in a bulleted list format based on a specified niche topic and marketing goals. Show the results in Rich text editor format.',
        slug: 'generate-blog-topic-ideas',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter your marketing goal',
                field: 'textarea',
                name: 'goal',
                
            }            
        ]
    },
    {
        name: 'Blog Meta Description',
        decr: 'An AI tool that generates an optimized meta description for your blog article.',
        category: 'Blog',
        icon: '/blog-meta-description.png',
        aiPrompt: 'Generate an SEO-optimized meta description for a blog article based on the specified blog title, niche topic, and outline below. Show the results in Rich text editor format.',
        slug: 'generate-blog-meta-description',
        form: [
            {
                label: 'Enter your blog title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'YouTube SEO Title',
        decr: 'An AI tool that generates YouTube SEO titles based on your query.',
        category: 'YouTube',
        icon: '/youtube-seo-title.png',
        aiPrompt: 'Suggest 5 YouTube SEO titles based on the specified niche topic and marketing goal below.',
        slug: 'generate-youtube-seo-title',
        form: [
            {
                label: 'Enter your niche topic',
                field: 'input',
                name: 'YouTube-title',
                required: true
            },
            {
                label: 'Enter your marketing goal',
                field: 'textarea',
                name: 'YouTube-marketing-goal',
                required: true
            },
        ]
    },
    {
        name: 'YouTube Topic Ideas',
        decr: 'An AI tool that generates intelligent topic ideas for your YouTube videos',
        category: 'YouTube',
        icon: '/youtube-topic-ideas.png',
        aiPrompt: 'Generate smart topic ideas for a YouTube video based on the specified niche topic and marketing goal.',
        slug: 'generate-youtube-topic-ideas',
        form: [
            {
                label: 'Enter your niche topic',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter your marketing goal',
                field: 'textarea',
                name: 'marketing-goal'
            }
        ]
    },
    {
        name: 'YouTube Tags',
        decr: 'An AI tool that generates relevant hashtags for your YouTube videos',
        category: 'YouTube',
        icon: '/youtube-hashtag.png',
        aiPrompt: 'Generate 10 or more relevant hashtags for a YouTube video based on the specified title and niche topic.',
        slug: 'generate-youtube-hashtag',
        form: [
            {
                label: 'Enter the title of your YouTube video',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter your niche topic',
                field: 'input',
                name: 'niche',
                required: true
            },
        ]
    },
    {
        name: 'Email Subject Line',
        decr: 'An AI tool that boosts your open rates by generating highly effective subject lines for your marketing emails.',
        category: 'Email',
        icon: '/email-subject-line.png',
        aiPrompt: 'Suggest 5 email subject lines based on the specified marketing goal, niche topic, and outline below.',
        slug: 'generate-email-subject-line',
        form: [
            {
                label: 'Enter your marketing goal',
                field: 'input',
                name: 'goal',
                required: true
            },
            {
                label: 'Enter your niche topic',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter email content outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Email Content',
        decr: 'An AI tool that boosts your clickthrough rates by generating highly effective content for your marketing emails.',
        category: 'Email',
        icon: '/email-content.png',
        aiPrompt: 'Write a compelling marketing email based on the specified subject line, marketing goal, niche topic, and outline below.',
        slug: 'generate-email-content',
        form: [
            {
                label: 'Enter your email subject line',
                field: 'input',
                name: 'subject-line',
                required: true
            },
            {
                label: 'Enter your marketing goal',
                field: 'input',
                name: 'goal',
                required: true
            },
            {
                label: 'Enter your niche topic',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter email content outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Instagram Caption',
        decr: 'An AI tool that boosts your engagement by generating highly effective captions for your Instagram posts.',
        category: 'Instagram',
        icon: '/instagram-caption.png',
        aiPrompt: 'Generate a highly effective Instagram caption based on the specified niche topic, marketing goal, and post description.',
        slug: 'generate-blog-content',
        form: [
            {
                label: 'Enter your marketing goal',
                field: 'input',
                name: 'goal',
                required: true
            },
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: "What's your post about?",
                field: 'textarea',
                name: 'post-decription'
            }
        ]
    },
    {
        name: 'Instagram Hashtags',
        decr: 'An AI tool that generates highly effective hashtags that drive traffic to your Instagram posts.',
        category: 'Instagram',
        icon: '/youtube-hashtag.png',
        aiPrompt: 'Generate 10 or more relevant Instagram hashtags based on the specified post caption, niche topic, and post decription.',
        slug: 'generate-instagram-hashtags',
        form: [
            {
                label: 'Enter your post caption',
                field: 'input',
                name: 'caption',
                required: true
            },
            {
                label: 'Enter your niche topic',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: "What's your post about?",
                field: 'textarea',
                name: 'post-decription'
            }
        ]
    },
    {
        name: 'Ecommerce Product Description',
        decr: 'An AI tool that generates highly compelling eCommerce product descriptions for you.',
        category: 'Ecommerce',
        icon: '/product-description.png',
        aiPrompt: 'Generate a highly compelling eCommerce product description based on the specified product name, eCommerce niche, and selling points.',
        slug: 'generate-product-description',
        form: [
            {
                label: 'Enter eCommerce product name',
                field: 'input',
                name: 'product-name',
                required: true
            },
            {
                label: 'Enter the eCommerce niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter a few selling points of your product',
                field: 'textarea',
                name: 'selling-points'
            }
        ]
    },
]