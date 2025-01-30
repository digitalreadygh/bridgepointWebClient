<script setup>
// defineProps({
//   align: {
//     default: "center",
//   },
// });
</script>

<template>
 <div class="relative overflow-hidden group h-[350px] bg-primary card-hidden">
                    <img src="https://images.unsplash.com/photo-1595239244990-b609da3d95f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxkYXRhJTNBaW1hZ2UlMkZibXAlM0JiYXNlNjQlMkNRazMyQkFBQUFBQUFBRFlBQUFBb0FBQUFDQUFBQUFnQUFBQUJBQmdBQUFBQUFNQUFBQUFUQ3dBQUV3c0FBQUFBQUFBQUFBQUFvWnRhbnBaTm9aTTR0S05KeTd0dzBjV0Z1clYlMkZpcEJqcDZSMW41dGtsSTQlMkZvWmxLdkxWNXlNT1R0TFNLaFl0Z3I2Mk1vYUY1aUl0Tmk1RlRxN0NJdnNLa3I3T1dnSVpkdGJPYXBhYUhobzVnaEpKbnBMS1l1Y1N5ckxTZ2ZvVmZ0N1dkcXF1T2s1bDBrcDklMkZyTHFudk1pN3JiYW1nSWRtdDdPWHNLMlBwYWFGckxHV3ZzYTB4YzYlMkZzYm1vaG8xdXRiQ1BzNiUyQk50YkdSd0wlMkJsenRDOHp0TEJ0cnlwaTVKMXRLJTJCTHRhJTJCTXVyV1Z5TVdxMU5TJTJGMGRUQnVMMm9qcFIzfGVufDB8MHx8fDE3MjM0MDU0MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
                        class="h-full transition-all delay-300 duration-400 ease-in w-full absolute group-hover:scale-105 object-center">
                    <div class=" border-2 border-white absolute p-8 z-50 gap-4 flex flex-col justify-center items-center bg-opacity-45 h-full w-full bottom-0">
                        <h1 class="flex flex-row justify-center text-4xl text-center border-2 border-red-600 text-white font-canela">
                            <slot name="title">Title</slot>
                        </h1>
                        <p class="flex flex-row justify-center group-hover:block text-white text-2xl text-center w-[70%] border-2 border-yellow-600  hidden">
                            
                            <slot name="desc">Description</slot>

                        </p>
                    </div>
                    <div
                        class="absolute transition-all duration-400 ease-in bg-gradient-to-b from-transparent to-black min-h-[650px] text-white bottom-0 group-hover:bottom-0 group-hover:min-h-[900px] w-full z-30">
                    </div>
                </div>
</template>
