http://stackoverflow.com/questions/15669091/bower-install-using-only-https

git config --global url."https://".insteadOf git://


In case anyone else applies this answer and then wonders later how to back out that global configuration 
change (like me), 
it's: git config --global --unset url."https://".insteadOf –
