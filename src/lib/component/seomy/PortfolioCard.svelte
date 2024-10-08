<script lang="ts">
    export let description: string
    export let title: string
    export let href: string
    export let image: string
</script>

<div class="col-lg-4 col-md-6 grid-item port-details3  port-details5">
    <div class="portfolio-inner-item-2 mb-40">
        <div class="portfolio-inner-thumb-2">
            <img alt="" src="{image}">
        </div>
        <div class="portfolio-inner-content-2">
            <div class="portfolio-inner-title-2">
                <a href="{href}">{title}</a>
            </div>
            <p>{description}</p>
        </div>
    </div>
</div>