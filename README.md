Reactjs

How to run the project

1. clone the github project
2. npm install
3. npm run dev
   4 open in the localhost

extra
Cookie and localStorage

1. Cookie is secure , it has the complex operation like user, expire, etc. it is done mostly in mono artitecture like blade, els ,
2. In react local store is done
3. arr.sort((a,b)=>a-b). Give in ascending value of number
4. Rest parameter. a=[1,2,3,4]. Const [firstNumber , …Numbers]=numbers. Console.log(firstNumber. 1 Console.log(Numbers) 2,3,4
   1. Reduce => a=[1,2,4,5]. Const maxNumber =a.reduce((acc,currentItem)=>{return acc>currrentItem?acc:currentItem},a[0])

Day 1(createSlice, reducer, action , state, action , store, provider)

1. npm install @reduxjs/toolkit
2. npm install react-redux
3. Make a folder as slice inside the src
4. Need to make slice. Redux help by using createSlice ({
5. name:”user”, //here in redux = is :
6. InitialState:{}, //make what we need a list and name it initial state at top and go its name here. Eg name:”sunil”
7. reducers:{
8. setname(state,action){
9. eg. State.name =“sunil gamal”. //action.payload
10. }
11. }
12. })
13. //action. Export Const setName= userSlice.action.setName
14. Export default userSlice.reducer
15. Make a store. Redux give the configureStore
16. const store = configureStore({
17. Reducer:{
18. userSlice:userSlice
19. }
20. })
21. Export default store
22. In before route user provider and provider from react-redux and pass the store
    Short
    Make a slice using createSlice then in slice its need name and initialState then use the reducer where there is function and in function it has state and action like the outer layer then use the action so it can be import to other function then export the reducer and function then make a store and then go to the router and just above the router user provider and pass the store.

Day 2(useSelector, useDispatch)

1. In store make the type for the useSelector and useDispatch for the typescript
2. Make the hook for the useSelector and useDispatch so it has type + hook
3. useSelector is for the select the global data const {status} = useAppSelector((store)=>store.auth)
4. useDispatch is for the manipulation of the data this is same as useNavigate but when calling function we need to have dispatch first
5. Eg const dispatch = useAppdispatch()
6. dispatch(setname({
7. name="sunil”
8. }))
   Day 3(thunks)
9. Make the function
10. Then in another function ie thunks add for the api calling
11. In first function data is coming
12. In second dispatch is coming
13. Dispatch is used for manipulate the data
    Day4(registration)
14. Make the useState object to store the value
15. Have the handle change function constant handleChange=(e)=>{const {name,value}= e.target. setData({…data, [name]:value})}
16. Have the handleSubmit function and also make sure to have e.preventDefault.
17. In form we have the email password and submit
18. In form we have onsubmit and in input we have the onChange and make sure to have the value and name same
19. If we want id and label name can be same
20. Then If we want the operation for the database manipulation we have thunks, and we have to pass the value of the data by using useDispatch and sent either from backend or frontend data
    Day5(login and homepage)
21. For login same as register but here token is introduce
22. If all is correct then set the token in the local storage by localStorage.setItem(“key ”, value)
23. Also set the token in the redux toolkit
    Day6(fetch Product). Read operation
24. Make a card for the product
25. In product page it needs nabber and product. Product is display by using map
26. Make the productSlice with name ,initalState, reducer{setProduct, setState}
27. Make thunks for api calling
28. So when user visit the product page it call the thunk function by using useEffect
29. We also need value to be set in card so also get the value by using selector
30. Now pass the props in the card
31. In card we assign the value

Day7(detail Product). For the img in backend to accept use the app.use(express.static(./upload))

1. In product page link the cards to this route i.e Link to ={‘route’+id}
2. Make a component
3. Make a route
4. Make a thunks that receive the id //this is always in object mainly since it is single
5. Then in component get id from useParams
6. Then use Dispatch hook for data .i.e function calling so when user enter this page it get this data
7. Then this data is set in global route then it need to show this data using selector hook
   Extra find is object and filter is array

- Here data may already be in the product fetch api
- So if we can get the data from there then we can skip the above portion
- If not found then go to above
- In redux we have the getSate() to get inner state
  Day8(Add to cart)

1. In cart we need to login so we must need api with token
2. And implement the navbar with it and have number by using the sup then
3. Thunk for the delete, update , fetch

Day9(checkout )

1. in cart button add link for checkout
2. Then make the component and route to test
3. Since the data is already in the item of the cart and just need to read that data and show
4. Need to match the backend so we pass the userid and productid. When submit
5. We also have the form for the checkout
6. When submit is success backend send the userid and productid
7. Now this is used to delete the item inside the cart //here its in the cart item

Day10(Khalti )

1. Make the dropdown for payment using select
2. In button for cod , khalti , esewa make it dynamic ie {data.method == khat &&(console.log(khalti)) }
3. After khalti is select then backend give the url
4. Now if we get response 200 then in orderItem check response.data.url
5. If found then set the data of url in frontend data
6. Then navigate it by using window.location.href= response.data.url
   Day11(order list for details)
7. Same as fetch order just id is coming
8. We get id from useParams hook
9. If id then dispatch is call for this function done in the orderDetails
10. Then useSelector for the getting the data
11. We need typescript
12. So we copy from the console of what is coming from db
13. Then make it to interface Object
    Day12(admin dashboard)
14. In tailwindflex search daystar
15. After the link and content are changed
16. Then problem is with change in content page should show in same
17. So we pass the content in layout with children. In children function .ie category and other we have adminLayout on just below the return
18. Where we want we use dynamic as {children}. Which comes as pros
    Upto this static dashboard is complete

Day13(category Crud )

1. Since we don’t need the global variable for this category so we directly implement instead of it in thunks for the api hit
2. Then we pass the props for category table from category
3. Then instead of useSelector and useDispatch for function calling and selecting the value we can simply get the value from props
4. Next assign the value by using map and at its appropriate place
   (category DELETE)
5. Now for delete pass the id in the api
6. Then by response of backend send alert message
7. Button onclick={()=>deleteCategory.id}
   problem. When delete it doesn’t remove it in frontend
   So we have 2 solution
8. Either use the state management ie redux for autosync
9. When delete fetch the api

State

1. Copy paste the cart
2. Change IcartDetailsInitialState to IcategoryInitialState
3. Make its interface as Interface IcategoryInitialState
4. Also ICategory for payload
5. Slice name
6. Check the api name
7. Check the export name
8. Register it in store

Now we need to fetch this in required file

1.  UseDispatch for the function calling
2.  useSelector for the value retrieve

Add the category

1. We need to get model
2. Make a useState isModelOpen
3. OnClick event in the Button to open this model
4. Now make the logic ie isModelOpen true then {isModelOpen && <Model closeModel={closeModel}/>}
5. Also pass the closeModel as props so when click on close or X it is close
6. Since we have only name so we don’t need handleClick function
7. Then in thunks function there is value coming for the add Category
8. Pass that value to the api hit
9. Now in handleSubmit we need to call the above function so use dispatch
10. Now to close the modal , check the status value then close the model
11. For the user to stop the multiple hit make the loading state then true in the handleSubmit and in the submit button make disable={loading}
12. On add we need to push it in array not a new one so we change some logic in reducer

Day14(users in admin)

1.  Make a slice
2.  Make thunks for fetch the user and delete the user
3.  Show the data in table for the ui
4.  Make the admin layout for the dashboard
5.  Now fetch the user by using the dispatch
6.  Now use selector hook to get the data
7.  Now pass the data of fetch user in the userTable
8.  In user table pass the data from props
9.  For delete pass the id

Day15(product in admin dashboard)

1.  In product make the adminLayout for component to show
2.  Then make a route for this product
3.  Now ui and logic must be different so make productTable for ui
4.  Now pass the props for this productTable by calling the dispatch and selector
    Slice
5.  CreateSlice ({
6.  name: “”,
7.  initalStatus: from IinitialStatus,
8.  reducers: whatever we have in the const IinitaialStatus. For eg setSatus(state,action), setProducts, state.status=action.payload
9.  })
10. Export const{setStatus,setProduct} =productSlice.action
11. Export default productSlice.reducer
12. Export function fetchProduct(){
13. Return async function fetchProductThunk(dispatch){
14. Const response =await axis.get(“URL”)
15. If(response.status == 200){
16. dispatch(setStatus(status.success))
17. dispatch(setProduct(response.data.data))
18. }}}
19. Now in store store this slice
    Logic
20. We have to get the data when the user get to page
21. So we use UseEffect
22. In useEffect we need to call the Thunks so we need dispatch
23. we need to pass the data we need the selector

Day16(product in admin dashboard modal)

1. Modal is done same as in create of user
2. Now in category we use the dispatch of function when user select on the category by using onchange={fetchProduct}
3. Now we show data in dropdown by using map

Day17(webSocket in admin dashboard)

1.  npm i socket.io-client
2.  In app.tsx import io from socket.io-client
3.  Then just above the app function export const socket = io(“url”,{auth:{token:localStorage.getItem(“name of token”)}})
4.  Here we use socket to change the status so in handleChangeStatus we use the logical part
5.  Now we use. UseEffect to listen the changes by socket.on(“URL,(data)=>”)
6.  Now we need to change the orderStatus so we have reducers for this
