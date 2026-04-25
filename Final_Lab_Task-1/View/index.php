
<html>

<head>
    <title>Form Validation</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 24px;
            font-family: "Segoe UI", Tahoma, sans-serif;
        }

        .form-container {
            max-width: 480px;
        }

        h2 {
            margin-bottom: 16px;
        }

        label {
            display: block;
            margin: 10px 0 6px;
        }

        input,
        textarea {
            width: 100%;
            padding: 8px;
            font: inherit;
        }

        textarea {
            min-height: 80px;
            resize: vertical;
        }

        .radio-group {
            display: flex;
            gap: 20px;
            align-items: center;
            margin-top: 6px;
        }

        .radio-group label {
            display: flex;
            align-items: center;
            gap: 6px;
            margin: 0;
            font-weight: normal;
        }

        .radio-group input {
            width: auto;
        }


        .required {
            color: #b00020;
        }

        button {
            margin-top: 14px;
            padding: 8px 12px;
            font: inherit;
            cursor: pointer;
        }
    </style>
</head>

<body>

    <div class="form-container">
        <h2>PHP Form Validation</h2>

        <form method="post" action="../Controller/FormController.php">
            <label>Name <span class="required">*</span></label>
            <input type="text" name="name" />

            <label>Email <span class="required">*</span></label>
            <input type="text" name="email" />

            <label>Website</label>
            <input type="url" name="website" />

            <label>Comment</label>
            <textarea name="comment"></textarea>

            <label>Gender <span class="required">*</span></label>
            <div class="radio-group">
                <label><input type="radio" name="gender" value="female"> Female</label>
                <label><input type="radio" name="gender" value="male"> Male</label>
                <label><input type="radio" name="gender" value="other"> Other</label>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>

</body>

</html>