

<script context="module">
    //  prerender this page 
    export const prerender = true;
    export async function load({ session }) {
        const { user } = session;

        if (! user) {
            return {
                status: 302,
                redirect: "/home"
            };
        }

        return {};
    }
</script>
  
  