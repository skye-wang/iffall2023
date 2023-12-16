const prev = document.getElementById('prev_btn')
const next = document.getElementById('next_btn')
const list1 = document.getElementById('item_list1')
const list2 = document.getElementById('item_list2')

const itemWidth = 220
const padding = 150

prev.addEventListener('click',()=>{
    list1.scrollLeft -= (itemWidth + padding)
    list2.scrollLeft -= (itemWidth + padding)
})

next.addEventListener('click',()=>{
    list1.scrollLeft +=(itemWidth + padding)
    list2.scrollLeft +=(itemWidth + padding)
})

