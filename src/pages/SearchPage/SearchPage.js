import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";


const SearchPage = ({OnSearch}) => {
    cons [searchInput, setSearchInput] = useState("");

    const navigate = useNavigate();

    const initialValues = 

    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm();
    



    return(
        <>
        <p> Search Page</p>
        </>
    )
}

export default SearchPage;