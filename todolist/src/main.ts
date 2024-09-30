import './style.css'
import FullList from './model/FullList'
import ListItem from './model/listItem'
import ListTemplate from './templates/listTemplate'
 
const  initApp=():void=>{
  const fullList=FullList.instance
  const template=ListTemplate.instance

  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement

  itemEntryForm.addEventListener("submit",(Event:SubmitEvent):void=>{
    Event.preventDefault()

    const input = document.getElementById("newItem") as HTMLInputElement
    const newEntryText:string = input.value.trim()

    if(newEntryText.length){
      const itemId:number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length -1 ].id)+1 
      :1

      const newItem= new ListItem(itemId.toString(),newEntryText)
      fullList.addItem(newItem)
      template.render(fullList)
      input.value='';
    }
  })

  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement
  clearItems.addEventListener('click',():void=>{
    fullList.clearList()
    template.clear()
  })

  fullList.load()
  template.render(fullList)
}
document.addEventListener("DOMContentLoaded",initApp)