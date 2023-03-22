<script lang="ts">
    export let name: string;
    export let image: string;
    export let grayscale: boolean;
</script>

<card>
    <img class:grayscale={grayscale} src="{image}" alt="">
    <div>{name}</div>
</card>

<style>
    card {
        height: 100%;
        overflow: hidden;
        user-select: none;
        display: flex;
        flex-direction: column;
        gap: 0px;
    }
    
    div {
        background-color: #061c25;
        z-index: 1;
        padding: 4%;

        font-family: 'BeaufortforLOL', sans-serif;
        color: #fff;
        text-transform: uppercase;
        font-style: italic;
        letter-spacing: 1px;
    }

    img {
        aspect-ratio: 8 / 10;
        object-fit: cover;
        height: 100%;
        
        transition: all 0.5s;
        transform: scale(1.1);
        clip-path: polygon(85% 0, 100% 15%, 100% 100%, 0 100%, 0 0);
    }

    card:hover img {
        transform: scale(1);
        clip-path: polygon(100% 0, 100% 0%, 100% 100%, 0 100%, 0 0);
    }

    .grayscale {
        filter: grayscale(1);
    }
    
</style>