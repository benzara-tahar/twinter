<script lang="ts">
	import { closeModal } from 'svelte-modals';
	import { fade, fly } from 'svelte/transition';
	// provided by <Modals />
	export let isOpen;

	const login = () => {};
</script>

{#if isOpen}
	<div role="dialog" class="twitty-modal-container" out:fade={{ duration: 500 }}>
		<div class="twitty-modal w-full max-w-sm ">
			<div
				class="card flex-shrink-0  shadow-2xl bg-base-100 relative"
				in:fly={{ duration: 100, y: 20 }}
				out:fly={{ duration: 150, y: -20 }}
			>
				<div class="card-body">
					<div class="form-control">
						<label class="label" for="email">
							<span class="label-text">Email</span>
						</label>
						<input name="email" type="text" placeholder="email" class="input input-bordered" />
					</div>
					<div class="form-control">
						<label class="label" for="password">
							<span class="label-text">Password</span>
						</label>
						<input
							type="text"
							placeholder="password"
							class="input input-bordered"
							name="password"
						/>
						<label class="label" for="">
							<a href="/forgot-password" class="label-text-alt link link-hover">Forgot password?</a>
						</label>
					</div>
					<div class="form-control mt-6">
						<button class="btn btn-primary">Login</button>
					</div>
					<div class="form-control mt-6">
						<button class="btn" on:click={closeModal}>Close</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<p>loading...</p>
{/if}

<!-- 
<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div class="card-body">
        <div class="form-control">
            <label class="label" for="email">
                <span class="label-text">Email</span>
            </label>
            <input name="email" type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label" for="password">
                <span class="label-text">Password</span>
            </label>
            <input
                type="text"
                placeholder="password"
                class="input input-bordered"
                name="password"
            />
            <label class="label" for="">
                <a href="/forgot-password" class="label-text-alt link link-hover">Forgot password?</a>
            </label>
        </div>
        <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
        </div>
        <div class="form-control mt-6">
            <button class="btn" on:click={closeModal}>Close</button>
        </div>
    </div> 
</div>-->
