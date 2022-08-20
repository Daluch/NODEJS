var mongoose=require ("mongoose")
url="mongodb+srv://daluch123:daluch123@cluster0.ccsg27v.mongodb.net/myFirstDB?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
