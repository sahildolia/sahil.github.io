gsap.from('.navbar', { duration: 1, y: '-100%'})
gsap.from('.right', { duration: 1, x: '-100%', delay: 0.6, opacity: 0})
gsap.from('.left', { duration: 1, x: '100%', delay: 0.6, opacity: 0})

gsap.registerPlugin(ScrollTrigger);

gsap.from('.a1', { 
    scrollTrigger: {
        trigger: ".a1",
        toggleActions: "restart pause resume"
    },
    duration: 1,
    opacity: 0,
    y: '-100%'})

    gsap.from('.lp',{
       scrollTrigger: {
        trigger: '.lp',
        toggleActions: "restart"
       },
       duration: 1,
       opacity: 0,
       delay:0.6,
       x: '-100%' 
    })

    gsap.from('.ri',{
        scrollTrigger: {
         trigger: '.ri',
         toggleActions: "restart"
        },
        duration: 1,
        opacity: 0,
        delay:0.6,
        x: '100%' 
     })

     gsap.from('.s3', { 
        scrollTrigger: {
            trigger: ".s3",
            toggleActions: "restart pause resume"
        },
        duration: 1,
        opacity: 0,
        y: '-100%'})

     gsap.from('.left-card',{
        scrollTrigger: {
            trigger: '.left-card',
            toggleActions: 'restart pause resume'
        },
        duration: 1,
        opacity: 0,
        x: '-100%',
        ease: 'none',
        delay:0.6
     })

     gsap.from('.right-card',{
        scrollTrigger: {
            trigger: '.right-card',
            toggleActions: 'restart pause resume'
        },
        duration: 1,
        opacity: 0,
        x: '100%',
        ease: 'none',
        delay:0.6
     })



     gsap.from('.my-skills', { 
        scrollTrigger: {
            trigger: ".my-skills",
            toggleActions: "restart"
        },
        duration: 1,
        opacity: 0,
        y: '-100%'})



        gsap.from('.recent', { 
            scrollTrigger: {
                trigger: ".recent",
                toggleActions: "restart"
            },
            duration: 1,
            opacity: 0,
            y: '-100%'})



            gsap.from('.contact-links',{
                scrollTrigger: {
                 trigger: '.contact-links',
                 toggleActions: "restart"
                },
                duration: 1,
                opacity: 0,
                x: '-100%' 
             })
             gsap.from('.fields', { 
                scrollTrigger: {
                    trigger: ".fields",
                    toggleActions: "restart pause resume"
                },
                duration: 1,
                delay: 0.6,
                opacity: 0,
                y: '-100%'})
                gsap.from('.submit-btn',{
                    scrollTrigger: {
                     trigger: '.submit-btn',
                     toggleActions: "play"
                    },
                    duration: 1,
                    opacity: 0,
                    delay:1,
                    x: '100%' 
                 })
            

      