import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default function userPointer(){
    let point=reactive({
        x:0,y:0
    })
    const savePoint=(event)=>{
        point.x=event.pageX;
        point.y=event.pageY;
    }
    onMounted(()=>{
        window.addEventListener("click",savePoint)
    });
    onBeforeUnmount(()=>{
        window.addEventListener("click",savePoint)
    });
    return point
}