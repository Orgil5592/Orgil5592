function calc ()
{
    var m1 = parseInt (document.getElementById('m1').value);
    var m2 = parseInt (document.getElementById('m2').value);
    var oper = document.getElementById('operators').value;

    if(oper === '+')
    {
        var m2 = document.getElementById('result').value = m1+m2;
    }

    if(oper === '-')
    {
        var m2 = document.getElementById('result').value = m1-m2;
    }

    if(oper === '/')
    {
        var m2 = document.getElementById('result').value = m1/m2;
    }

    if(oper === '*')
    {
        var m2 = document.getElementById('result').value = m1*m2;
    }
}