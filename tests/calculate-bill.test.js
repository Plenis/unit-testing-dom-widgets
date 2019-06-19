describe('calculateBtnClicked' , function(){
    it('should return the total amount of calls in the string' , function(){
        var instances = calculateBtnClicked()
        assert.equal(instances.logic('call'), '2.75');
    });
    
    it('should return the total amount of sms in the string' , function(){
        var instances = calculateBtnClicked()
        assert.equal(instances.logic('sms'), '0.75');
    });

    it('should return the total amount for both calls and sms inserted in the string, split with a comma', function (){
        var instances = calculateBtnClicked()
        assert.equal(instances.logic('call, sms, call, call, call'), '11.75');
    })

    it('should not count entries that are not seperated with a comma', function(){
        var instances = calculateBtnClicked()
        assert.equal(instances.logic('sms, sms, call'), '4.25');
    })

    it('should return orange when the warning level reaches 20 or more', function(){
        var instances = calculateBtnClicked()
        assert.equal(instances.logic('call, sms, call, call, call, call, sms, call, call, call'), '23.50');
    })

    it('should return red when the critical level reaches 30 or more', function(){
        var instances = calculateBtnClicked()
        assert.equal(instances.logic('call, sms, call, call, call, call, sms, call, call, call, sms, sms, sms, sms, call, call'), '32.00');
    })

    it('should return back to orange when data is taken away and is less the critical level', function(){
        var instances = calculateBtnClicked()
        assert.equal(instances.logic('call, sms, sms, sms, sms, sms, call, call, call, call, call'), '20.25');
    })

    it('should return back to black when data is is taken away and is less than the warning level', function(){
        var instances = calculateBtnClicked()
        assert.equal(instances.logic('call, sms, call, call'), '9.00');
    })
 });
