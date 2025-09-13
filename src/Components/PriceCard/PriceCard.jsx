import React from 'react';
import CardData from "../../CardData.json";
import BackCard from '../../BackCard.json';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Divider
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './PriceCard.css';

export default function PriceCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 4,
        p: 2,
      }}
    >
      {BackCard.map((plan, index) => {
        const backPlan = CardData[index];
        return (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">

              {/* 🔵 FRONT SIDE */}
              <div className="flip-card-front">
                <Card className="price-card">
                  <CardContent className="price-card-content">
                    <Box
                      sx={{
                        height:200,
                        backgroundColor: '#e3f2fd',
                        borderRadius: '8px',
                        p: 2,
                        mb: 2,
                      }}
                    >
                      <Typography variant="h5" sx={{ color: '#0066ff', mb: 1 }}>
                        {plan.title}
                      </Typography>
                    </Box>

                    <Divider sx={{ mb: 2, backgroundColor: 'red' }} />

                    <Typography variant="body2" className="price-card-description">
                      {plan.description}
                    </Typography>

                    <Button
                      variant="contained"
                      fullWidth
                      className="price-card-button"
                      sx={{
                        borderRadius: '8px',
                        backgroundColor: '#0066ff',
                        color: '#fff',
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: '#004ecc',
                        },
                      }}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* 🔴 BACK SIDE */}
              <div className="flip-card-back">
                <Card className="price-card">
                  <CardContent className="price-card-content">
                    <Box
                      sx={{
                        height:200,
                        backgroundColor: '#e3f2fd',
                        borderRadius: '8px',
                        p: 2,
                        mb: 2,
                      }}
                    >
                      <Typography variant="h5" sx={{ color: '#0066ff', mb: 1 }}>
                        {backPlan?.title}
                      </Typography>
                      {/* Here trying to text align properly  */}
                      <Typography variant="body1" sx={{ mb: 2 , textAlign: "justify"}}>
                        {backPlan?.description}
                      </Typography>
                    </Box>

                    <Divider sx={{ mb: 2, backgroundColor: 'red' }} />

                    <Stack spacing={1} sx={{ textAlign: 'left', flex: 1 }}>
                      {backPlan?.features?.map((feature, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          {feature.included ? (
                            <CheckCircleIcon sx={{ color: 'green', mr: 1 }} />
                          ) : (
                            <CancelIcon sx={{ color: 'red', mr: 1 }} />
                          )}
                          {feature.text}
                        </Typography>
                      ))}
                    </Stack>

                    <Button
                      variant="contained"
                      fullWidth
                      className="price-card-button"
                      sx={{
                        borderRadius: '8px',
                        backgroundColor: '#0066ff',
                        color: '#fff',
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: '#004ecc',
                        },
                      }}
                    >
                      {backPlan?.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        );
      })}
    </Box>
  );
}
