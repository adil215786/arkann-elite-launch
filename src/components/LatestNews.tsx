import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import newsSports from '@/assets/news-sports.jpg';
import newsScience from '@/assets/news-science.jpg';
import newsArts from '@/assets/news-arts.jpg';

const newsItems = [
  {
    image: newsSports,
    category: 'Athletics',
    date: 'January 28, 2026',
    title: 'Muslimah Athletes Shine at Inter-School Sports Day',
    excerpt: 'Our hijabi athletes demonstrated excellence in track, basketball, and swimming events.',
  },
  {
    image: newsScience,
    category: 'STEM',
    date: 'January 22, 2026',
    title: 'Students Present at National Islamic School Science Fair',
    excerpt: 'Innovative projects on sustainable energy and medical research impressed judges and community members.',
  },
  {
    image: newsArts,
    category: 'Islamic Arts',
    date: 'January 15, 2026',
    title: 'Annual Nasheed Performance Celebrates Islamic Heritage',
    excerpt: 'Beautiful nasheeds and Islamic poetry performances showcased our students\' artistic talents.',
  },
];

const LatestNews = () => {
  return (
    <section id="news" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">
              News & Events
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy">
              Latest from Arkann
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-navy font-medium hover:text-gold transition-colors group"
          >
            View All News
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.article
              key={news.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-gold text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                  <h3 className="font-serif text-xl text-navy mb-3 leading-snug group-hover:text-gold transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
