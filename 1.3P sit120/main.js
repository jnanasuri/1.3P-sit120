const app = Vue.createApp({
    data() {
        return {
            projects: [
                { id: 1, name: 'Project 1', description: 'Description 1' },
                { id: 2, name: 'Project 2', description: 'Description 2' },
                // Add more projects
            ]
        }
    },
    template: `
        <div>
            <header>
                <h1>Jnana Suri</h1>
            </header>
            <main>
                <section>
                    <h2>Projects</h2>
                    <ul>
                        <li v-for="project in projects" :key="project.id">
                            <h3>{{ project.name }}</h3>
                            <p>{{ project.description }}</p>
                        </li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Your Portfolio</p>
            </footer>
        </div>
    `
});

app.mount('#app');
