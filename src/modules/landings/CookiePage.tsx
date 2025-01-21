import React from 'react';
import {styles} from "./styles/LandingStyles";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";

export const CookiePage = () => {

    const sections = [
        {
            title: "1. Введение",
            content: "Настоящая Политика в отношении файлов cookie описывает, как мы используем файлы cookie и аналогичные технологии на нашем сайте. Эта политика поможет вам понять, какую информацию мы собираем с помощью файлов cookie и как мы её используем."
        },
        {
            title: "2. Что такое файлы cookie",
            content: "Файлы cookie - это небольшие текстовые файлы, которые сохраняются на вашем устройстве (компьютере, смартфоне или планшете) при посещении нашего сайта. Они помогают сайту запоминать информацию о вашем посещении, что облегчает последующие визиты и делает сайт более полезным для вас."
        },
        {
            title: "3. Типы используемых файлов cookie",
            content: "Мы используем следующие типы файлов cookie:",
            list: [
                "Необходимые файлы cookie - обеспечивают работу основных функций сайта",
                "Функциональные файлы cookie - улучшают работу сайта и персонализируют его",
                "Аналитические файлы cookie - помогают понять, как посетители используют сайт",
                "Рекламные файлы cookie - используются для показа релевантной рекламы"
            ]
        },
        {
            title: "4. Подробная информация о файлах cookie",
            tableData: {
                headers: ["Название", "Тип", "Срок действия", "Назначение"],
                rows: [
                    ["session_id", "Необходимые", "Сессия", "Поддержка сессии пользователя"],
                    ["user_pref", "Функциональные", "1 год", "Сохранение настроек пользователя"],
                    ["analytics_id", "Аналитические", "2 года", "Анализ использования сайта"],
                    ["ad_token", "Рекламные", "30 дней", "Таргетированная реклама"]
                ]
            }
        },
        {
            title: "5. Управление файлами cookie",
            content: "Вы можете контролировать и/или удалять файлы cookie по своему усмотрению. Вы можете удалить все файлы cookie, уже находящиеся на вашем устройстве, а также настроить большинство браузеров таким образом, чтобы они не сохранялись.",
            list: [
                "В настройках браузера выберите раздел управления файлами cookie",
                "Настройте правила принятия или отклонения файлов cookie",
                "При необходимости удалите существующие файлы cookie",
                "Помните, что отключение cookie может повлиять на функциональность сайта"
            ]
        },
        {
            title: "6. Срок хранения файлов cookie",
            content: "Различные файлы cookie имеют разные сроки хранения:",
            list: [
                "Сессионные cookie удаляются после закрытия браузера",
                "Постоянные cookie могут храниться до 2 лет",
                "Рекламные cookie обычно хранятся 30-90 дней",
                "Аналитические cookie могут храниться до 2 лет"
            ]
        },
        {
            title: "7. Обновление политики",
            content: "Мы можем обновлять эту Политику в отношении файлов cookie по мере необходимости. Рекомендуем периодически проверять эту страницу для получения актуальной информации о наших правилах использования файлов cookie."
        },
        {
            title: "8. Контактная информация",
            content: "Если у вас есть вопросы относительно использования файлов cookie на нашем сайте, пожалуйста, свяжитесь с нами:",
            contact: {
                email: "cookies@example.com",
                phone: "8-800-123-45-67"
            }
        }
    ];

    return (
        <>
            <Header/>
            <div style={styles.container}>
                <div style={styles.card}>
                    <div style={styles.header}>
                        <h1 style={styles.title}>Политика в отношении файлов cookie</h1>
                        <p style={styles.date}>Последнее обновление: 21 января 2025 г.</p>
                    </div>

                    {sections.map((section, index) => (
                        <div key={index} style={styles.section}>
                            <h2 style={styles.sectionTitle}>{section.title}</h2>
                            <p style={styles.content}>{section.content}</p>

                            {section.list && (
                                <ul style={styles.list}>
                                    {section.list.map((item, itemIndex) => (
                                        <li key={itemIndex} style={styles.listItem}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.tableData && (
                                <table style={styles.table as any}>
                                    <thead>
                                    <tr>
                                        {section.tableData.headers.map((header, index) => (
                                            <th key={index} style={styles.tableHeader as any}>{header}</th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {section.tableData.rows.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} style={styles.tableCell}>{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )}

                            {section.contact && (
                                <div style={styles.contact}>
                                    <p style={styles.contactItem}>Email: {section.contact.email}</p>
                                    <p style={styles.contactItem}>Телефон: {section.contact.phone}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

