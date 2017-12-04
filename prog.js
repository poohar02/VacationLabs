for(var i=1; i<=100;++i)
{
	if(i%3==0)
	{
		document.write("<br/>Earth");
		if(i%5==0)
		{
			document.write(",Jupiter");
		}
		if(i%9==0)
		{
			document.write(",Pluto");
		}
	}
	else if(i%5==0)
	{
		document.write("<br/>Jupiter");
		if(i%9==0)
		{
			document.write(",Pluto");
		}
	}
	else if(i%9==0)
	{
		document.write("<br/>Pluto");
	}
	else 
	{
		document.write("<br/>"+i);
	}
}
