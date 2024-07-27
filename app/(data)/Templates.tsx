// Fix icon URLs
export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates optimized blog titles based on your query.',
        category: 'Blog',
        icon: '/blog-title.png',
        aiPrompt: 'Suggest 5 search engine optimized blog titles in a bulleted list format based on the specified niche topic and outline. Return only the blog titles and nothing else',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline (optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog writer. All you need to do is enter your specific query.',
        category: 'Blog',
        icon: '/blog-content.png',
        aiPrompt: 'Generate blog content based on the specified blog title, niche topic, and outline. Return only the blog content and nothing else',
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
                label: 'Enter blog outline (optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that generates blog topic ideas based on your query.',
        category: 'Blog',
        icon: '/blog-topic-ideas.png',
        aiPrompt: 'Suggest 5 blog topic ideas in a bulleted list format based on a specified niche topic and marketing goals. Return only the topic ideas and nothing else',
        slug: 'generate-blog-topic-ideas',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter your marketing goal (optional)',
                field: 'textarea',
                name: 'goal',
                
            }            
        ]
    },
    {
        name: 'Blog Meta Description',
        desc: 'An AI tool that generates an optimized meta description for your blog article.',
        category: 'Blog',
        icon: '/blog-meta-description.png',
        aiPrompt: 'Generate an SEO-optimized meta description for a blog article based on the specified blog title, niche topic, and outline below. Return only the meta description and nothing else',
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
                label: 'Enter blog outline (optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'YouTube SEO Title',
        desc: 'An AI tool that generates YouTube SEO titles based on your query.',
        category: 'YouTube',
        icon: '/youtube-seo-title.png',
        aiPrompt: 'Suggest 5 YouTube SEO titles based on the specified niche topic and marketing goal below. Return only the SEO titles and nothing else',
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
        desc: 'An AI tool that generates intelligent topic ideas for your YouTube videos',
        category: 'YouTube',
        icon: '/youtube-topic-ideas.png',
        aiPrompt: 'Generate smart topic ideas for a YouTube video based on the specified niche topic and marketing goal. Return only the topic ideas and nothing else',
        slug: 'generate-youtube-topic-ideas',
        form: [
            {
                label: 'Enter your niche topic',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter your marketing goal (optional)',
                field: 'textarea',
                name: 'marketing-goal'
            }
        ]
    },
    {
        name: 'YouTube Tags',
        desc: 'An AI tool that generates relevant hashtags for your YouTube videos',
        category: 'YouTube',
        icon: '/youtube-hashtag.png',
        aiPrompt: 'Generate 10 or more relevant hashtags for a YouTube video based on the specified title and niche topic. Return only the hashtags and nothing else',
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
        desc: 'An AI tool that boosts your open rates by generating highly effective subject lines for your marketing emails.',
        category: 'Email',
        icon: '/email-subject-line.png',
        aiPrompt: 'Suggest 5 email subject lines based on the specified marketing goal, niche topic, and outline below. Return only the subject lines and nothing else',
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
                label: 'Enter email content outline (optional)',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Email Content',
        desc: 'An AI tool that boosts your clickthrough rates by generating highly effective content for your marketing emails.',
        category: 'Email',
        icon: '/email-content.png',
        aiPrompt: 'Write a compelling marketing email based on the specified subject line, marketing goal, niche topic, and outline below. Return only the email content and nothing else',
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
                label: 'Enter email content outline (optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Instagram Caption',
        desc: 'An AI tool that boosts your engagement by generating highly effective captions for your Instagram posts.',
        category: 'Instagram',
        icon: '/instagram-caption.png',
        aiPrompt: 'Generate a highly effective Instagram caption based on the specified niche topic, marketing goal, and post description. Return only the caption and nothing else',
        slug: 'generate-instagram-caption',
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
                label: "What's your post about? (optional)",
                field: 'textarea',
                name: 'post-desciption'
            }
        ]
    },
    {
        name: 'Instagram Hashtags',
        desc: 'An AI tool that generates highly effective hashtags that drive traffic to your Instagram posts.',
        category: 'Instagram',
        icon: '/youtube-hashtag.png',
        aiPrompt: 'Generate 10 or more relevant Instagram hashtags in bulleted list format based on the specified post caption, niche topic, and post desciption. Return the hashtags with no description',
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
                label: "What's your post about? (optional)",
                field: 'textarea',
                name: 'post-desciption'
            }
        ]
    },
    {
        name: 'Product Description',
        desc: 'An AI tool that generates highly compelling eCommerce product descriptions for you.',
        category: 'Ecommerce',
        icon: '/product-description.png',
        aiPrompt: 'Generate a highly compelling eCommerce product description based on the specified product name, eCommerce niche, and selling points. Return only the product description and nothing else',
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
                label: 'Enter a few selling points of your product (optional)',
                field: 'textarea',
                name: 'selling-points'
            }
        ]
    },
]