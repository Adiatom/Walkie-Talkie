<template>
    <div>
        <h3>Home</h3>
        <UserPage v-slot:user="{ user }">
        
            <div v-if="user">
            Logged-in as {{user.uid}}

            </div>
        
        </UserPage>
        <LoginPage />
    </div>
</template>``

<script>
import LoginPage from './LoginPage'
import UserPage from './UserPage'
export default{
    components: {
        LoginPage,
        UserPage,
    

    }


}

</script>