<template>
    <li>
        <header>
            <h3>{{ title }}</h3>
            <button>Delete</button>
        </header>        
        <p>{{ description }}</p>
        <a :href="url">View resource</a>
    </li>
</template>

<script>
export default {
    props: ['title', 'description', 'url']
}
</script>