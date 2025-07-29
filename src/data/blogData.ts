export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    description: string;
    content: string;
    image: string;
    date: string;
    readTime: string;
    author: {
        name: string;
        title: string;
        avatar: string;
    };
    tags: string[];
    featuredImage: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'unlocking-prescriptive-maintenance-ai-detections',
        title: 'Unlocking prescriptive maintenance with AI-based Detections',
        description: 'Prescriptive maintenance solutions are essential for optimising renewable energy assets, but building such robust features comes with its challenges.',
        content: `
            <p>Prescriptive maintenance represents the next evolution in asset management, going beyond predictive maintenance to not only predict when failures will occur but also prescribe the optimal actions to prevent them. This approach is particularly crucial for renewable energy assets where downtime can have significant financial and operational impacts.</p>
            
            <h2>The Challenge of Prescriptive Maintenance</h2>
            <p>Building prescriptive maintenance solutions requires sophisticated AI models that can:</p>
            <ul>
                <li>Analyze complex sensor data from multiple assets</li>
                <li>Identify patterns that indicate potential failures</li>
                <li>Recommend specific maintenance actions</li>
                <li>Optimize maintenance schedules to minimize costs</li>
            </ul>
            
            <h2>AI-Based Detection Systems</h2>
            <p>Our AI-based detection systems leverage advanced machine learning algorithms to process vast amounts of sensor data in real-time. These systems can identify anomalies that human operators might miss and provide early warnings of potential equipment failures.</p>
            
            <h2>Key Benefits</h2>
            <p>The implementation of AI-based prescriptive maintenance offers several key advantages:</p>
            <ul>
                <li><strong>Reduced Downtime:</strong> Early detection and intervention prevent costly unplanned outages</li>
                <li><strong>Optimized Maintenance:</strong> Maintenance activities are scheduled based on actual equipment condition rather than fixed intervals</li>
                <li><strong>Cost Savings:</strong> Reduced maintenance costs and improved asset utilization</li>
                <li><strong>Enhanced Safety:</strong> Proactive maintenance reduces the risk of catastrophic failures</li>
            </ul>
            
            <h2>Implementation Strategy</h2>
            <p>Successfully implementing prescriptive maintenance requires a phased approach:</p>
            <ol>
                <li>Data collection and sensor installation</li>
                <li>AI model development and training</li>
                <li>System integration and testing</li>
                <li>Gradual deployment and optimization</li>
            </ol>
            
            <p>As we continue to advance our AI capabilities, the potential for prescriptive maintenance to revolutionize asset management in renewable energy becomes increasingly clear. The combination of sophisticated AI models with comprehensive sensor networks creates a powerful foundation for truly intelligent asset management.</p>
        `,
        image: '/image/IMAGEN6.png',
        featuredImage: '/image/IMAGEN6.png',
        date: 'April 11, 2024',
        readTime: '8 min read',
        author: {
            name: 'Silvio Rodrigues',
            title: 'CIO & Co-founder',
            avatar: '/image/IMAGEN6.png'
        },
        tags: ['Technology', 'AI', 'Maintenance']
    },
    {
        id: '2',
        slug: 'solving-predictive-maintenance-time-machine-ai',
        title: 'Solving predictive maintenance challenges with Time-Machine AI models',
        description: 'Today we will go on a journey to discover some of the key advantages our Time-Machine AI models bring to predictive maintenance pipelines.',
        content: `
            <p>Today we will go on a journey to discover some of the key advantages our Time-Machine AI models bring to predictive maintenance pipelines. They helped us solve some of the biggest challenges we have encountered on our way, so hold on to your seats!</p>
            
            <h2>Time-Machine AI models</h2>
            <p>We have developed an AI model that we call Time-Machine (TM) models. They allow us to overcome different challenges in the space where Jungle operates: predictive maintenance solutions for electromechanical industrial assets. By the end of the post, their name will make a lot more sense :)</p>
            
            <p>Differently from most common standard AI models that learn a mix/average of normal behaviours contained in historical asset data, TM models learn all the individual behaviours that each sensor of each asset, e.g. a wind turbine, has had over its entire lifetime (see Figure 1).</p>
            
            <div style="text-align: center; margin: 2rem 0;">
                <img src="/image/IMAGEN6.png" alt="Time-Machine AI Model Diagram" style="max-width: 100%; height: auto; border-radius: 8px;" />
                <p style="font-style: italic; color: #666; margin-top: 1rem;">Figure 1 - Jungle's Time-Machine Unified model learn all historical normal behaviours for multiple assets and their sensors.</p>
            </div>
            
            <p>Time Machine models can be thought of as archives of normal behaviours for electromechanical assets. We can ask the TM model to mimic how an asset would have behaved if it would operate similarly when compared to a certain period.</p>
            
            <h2>Key Advantages</h2>
            <p>This simple but fundamentally better approach of TM models opens up a new entire world of exciting opportunities for us. Next, we will go over some of the major challenges they solve by design:</p>
            
            <ul>
                <li><strong>Historical Learning:</strong> TM models capture the complete history of each asset's behavior</li>
                <li><strong>Individual Asset Understanding:</strong> Each sensor and asset is treated as a unique entity</li>
                <li><strong>Predictive Accuracy:</strong> Enhanced prediction capabilities through comprehensive historical analysis</li>
                <li><strong>Scalability:</strong> Unified model approach reduces complexity while maintaining accuracy</li>
            </ul>
            
            <h2>Real-World Applications</h2>
            <p>Our Time-Machine AI models have been successfully deployed across various industrial applications:</p>
            <ul>
                <li>Wind turbine monitoring and maintenance</li>
                <li>Industrial machinery predictive maintenance</li>
                <li>Power grid asset management</li>
                <li>Manufacturing equipment optimization</li>
            </ul>
            
            <p>The revolutionary approach of Time-Machine AI models represents a significant leap forward in predictive maintenance technology, enabling more accurate predictions and better asset management strategies.</p>
        `,
        image: '/image/IMAGEN6.png',
        featuredImage: '/image/IMAGEN6.png',
        date: 'March 25, 2022',
        readTime: '6 min read',
        author: {
            name: 'Silvio Rodrigues',
            title: 'CIO & Co-founder',
            avatar: '/image/IMAGEN6.png'
        },
        tags: ['Technology', 'AI', 'Predictive Maintenance']
    },
    {
        id: '3',
        slug: 'unlocking-scalable-predictive-analytics-next-gen-ai',
        title: 'Unlocking scalable predictive analytics with next-gen AI models',
        description: 'The need for AI-based predictive solutions for electromechanical assets is on the rise. However, building large scale AI-dependent online systems is by no means an easy feat.',
        content: `
            <p>The need for AI-based predictive solutions for electromechanical assets is on the rise. However, building large scale AI-dependent online systems is by no means an easy feat. The complexity of managing thousands of assets simultaneously while maintaining high accuracy and reliability presents significant challenges.</p>
            
            <h2>The Scalability Challenge</h2>
            <p>Traditional AI approaches often struggle with scalability when dealing with multiple assets. Each asset typically requires its own model, leading to:</p>
            <ul>
                <li>Exponential growth in computational requirements</li>
                <li>Increased maintenance overhead</li>
                <li>Difficulty in maintaining consistency across models</li>
                <li>Higher costs and complexity</li>
            </ul>
            
            <h2>Next-Generation AI Solutions</h2>
            <p>Our next-generation AI models address these challenges through innovative approaches:</p>
            
            <div style="text-align: center; margin: 2rem 0;">
                <img src="/image/IMAGEN6.png" alt="Unified Model Architecture" style="max-width: 100%; height: auto; border-radius: 8px;" />
                <p style="font-style: italic; color: #666; margin-top: 1rem;">Figure 7 - Our approach allows us to reduce tens of thousands of single-variant sensor AI models to a single and large Unified Model</p>
            </div>
            
            <h2>Unified Model Architecture</h2>
            <p>The unified model approach represents a paradigm shift in predictive analytics:</p>
            <ul>
                <li><strong>Single Model, Multiple Assets:</strong> One model handles all assets efficiently</li>
                <li><strong>Reduced Complexity:</strong> Simplified maintenance and updates</li>
                <li><strong>Improved Consistency:</strong> Uniform predictions across all assets</li>
                <li><strong>Cost Efficiency:</strong> Lower computational and operational costs</li>
            </ul>
            
            <h2>Key Takeaways</h2>
            <p>Our scalable predictive analytics solution offers several key advantages:</p>
            <ul>
                <li>Leverage all historical data of electrical assets</li>
                <li>Lower the amount of false-positive and negative alarms</li>
                <li>Possibility of creating What-if scenarios with interpretable predictions</li>
                <li>Continual learning while preserving time consistency</li>
            </ul>
            
            <h2>Future Applications</h2>
            <p>These features allow users to understand their assets better and create more effective maintenance strategies. In future posts, we will discuss leveraging historical data from wind farms to create a library of failures, enabling better case detections and prescriptive maintenance solutions.</p>
            
            <p>The combination of scalable AI architecture with comprehensive data analysis capabilities opens new possibilities for industrial asset management, making predictive maintenance more accessible and effective than ever before.</p>
        `,
        image: '/image/IMAGEN6.png',
        featuredImage: '/image/IMAGEN6.png',
        date: 'March 8, 2022',
        readTime: '7 min read',
        author: {
            name: 'Silvio Rodrigues',
            title: 'CIO & Co-founder',
            avatar: '/image/IMAGEN6.png'
        },
        tags: ['Technology', 'AI', 'Analytics']
    }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find(post => post.slug === slug);
};

export const getAllBlogPosts = (): BlogPost[] => {
    return blogPosts;
};