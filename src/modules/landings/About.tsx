import React from 'react';
import {Favorite, Message, Shield} from '@mui/icons-material';
import {Link} from "react-router-dom";
import {RoutePool} from "../../Route";

export const About = () => {
    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 20px',
            fontFamily: 'Arial, sans-serif',
            color: '#333'
        },
        hero: {
            textAlign: 'center',
            marginBottom: '60px',
            padding: '60px 20px',
            background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
            borderRadius: '20px',
            color: 'white'
        },
        heroTitle: {
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '20px'
        },
        heroSubtitle: {
            fontSize: '20px',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto'
        },
        statsContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginBottom: '60px',
            textAlign: 'center'
        },
        statBox: {
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        },
        statNumber: {
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#FF6B6B',
            marginBottom: '10px'
        },
        statLabel: {
            fontSize: '18px',
            color: '#666'
        },
        section: {
            marginBottom: '60px'
        },
        sectionTitle: {
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '30px',
            textAlign: 'center',
            color: '#333'
        },
        featuresGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginBottom: '40px'
        },
        featureCard: {
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
        },
        featureIcon: {
            marginBottom: '20px',
            color: '#FF6B6B'
        },
        featureTitle: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#444'
        },
        featureDescription: {
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.6'
        },
        storySection: {
            textAlign: 'center',
            padding: '40px',
            backgroundColor: '#FFF0F0',
            borderRadius: '20px',
            marginBottom: '60px'
        },
        storyText: {
            fontSize: '18px',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#555'
        },
        ctaSection: {
            textAlign: 'center',
            padding: '60px',
            backgroundColor: '#FF6B6B',
            borderRadius: '20px',
            color: 'white'
        },
        ctaTitle: {
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '20px'
        },
        ctaButton: {
            display: 'inline-block',
            padding: '15px 40px',
            backgroundColor: 'white',
            color: '#FF6B6B',
            borderRadius: '30px',
            fontSize: '18px',
            fontWeight: 'bold',
            textDecoration: 'none',
            transition: 'transform 0.2s',
            cursor: 'pointer'
        }
    };

    const stats = [
        {number: "2M+", label: "Счастливых пар"},
        {number: "10M+", label: "Пользователей"},
        {number: "150+", label: "Стран"}
    ];

    const features = [
        {
            icon: <Favorite/>,
            title: "Умный подбор пар",
            description: "Наш алгоритм учитывает ваши интересы, ценности и цели для поиска идеального партнера"
        },
        {
            icon: <Shield/>,
            title: "Безопасность",
            description: "Верификация профилей и современные системы защиты ваших данных"
        },
        {
            icon: <Message/>,
            title: "Удобное общение",
            description: "Чат, видеозвонки и обмен фотографиями в современном интерфейсе"
        }
    ];

    return (
        <div style={styles.container}>
            <div style={styles.hero as any}>
                <h1 style={styles.heroTitle}>Найдите свою любовь</h1>
                <p style={styles.heroSubtitle}>
                    Мы помогаем миллионам людей найти свою вторую половинку, создавая счастливые отношения каждый день
                </p>
            </div>

            <div style={styles.statsContainer as any}>
                {stats.map((stat, index) => (
                    <div key={index} style={styles.statBox}>
                        <div style={styles.statNumber}>{stat.number}</div>
                        <div style={styles.statLabel}>{stat.label}</div>
                    </div>
                ))}
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle as any}>Почему выбирают нас</h2>
                <div style={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <div key={index} style={styles.featureCard as any}>
                            <div style={styles.featureIcon}>{feature.icon}</div>
                            <h3 style={styles.featureTitle}>{feature.title}</h3>
                            <p style={styles.featureDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={styles.storySection as any}>
                <h2 style={styles.sectionTitle as any}>Наша история</h2>
                <p style={styles.storyText}>
                    С 2015 года мы помогаем людям находить настоящую любовь. Начав как небольшой стартап,
                    мы выросли в одну из крупнейших платформ для знакомств в мире. Наша миссия - создавать
                    счастливые отношения, используя передовые технологии и глубокое понимание человеческих отношений.
                </p>
            </div>

            <div style={styles.ctaSection as any}>
                <h2 style={styles.ctaTitle}>Готовы найти свою любовь?</h2>
                <Link to={RoutePool.MainURL.url} style={styles.ctaButton}>
                    Начать знакомства
                </Link>
            </div>
        </div>
    );
};

